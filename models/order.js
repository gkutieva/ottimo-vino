const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vinoSchema = require('./vinoSchema');

const lineVinoSchema = new Schema({
  qty: { type: Number, default: 1 },
  item: vinoSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

// extPrice is short for extendedPrice (qty * item price)
lineVinoSchema.virtual('extPrice').get(function() {
  return this.qty * this.item.price;
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  lineVinos: [lineVinoSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

// Add the following helpful virtuals to order documents
orderSchema.virtual('orderTotal').get(function () {
  return this.lineVinos.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function () {
  return this.lineVinos.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function () {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function (userId) {
  // 'this' is the Order model 
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update - in the case of a cart, create it
    { user: userId },
    // specify to upsert
    { upsert: true, new: true }
  );
};

orderSchema.methods.addVinoToCart = async function (vinoId) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Check if the item already exists in the cart
  const lineVino = cart.lineVinos.find(lineVino => lineVino.item._id.equals(vinoId));
  console.log(lineVino);
  if (lineVino) {
    // It already exists, so increase the qty
    lineVino.qty += 1;
  } else {
    // Get the item from the "catalog"
    const vino = await mongoose.model('Vino').findById(vinoId);
    cart.lineVinos.push({ qty: 1, item: vino });
  }
  // return the save() method's promise
  return cart.save();
};

// Instance method to set an item's qty in the cart (will add item if does not exist)
orderSchema.methods.setItemQty = async function (vinoId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line item in the cart for the menu item
  const lineVino = cart.lineVinos.find(lineVino => lineVino.item._id.equals(vinoId));
  if (lineVino && newQty <= 0) {
    // Calling remove, removes itself from the cart.lineVinos array
    lineVino.remove();
  } else if (lineVino) {
    // Set the new qty - positive value is assured thanks to prev if
    lineVino.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);