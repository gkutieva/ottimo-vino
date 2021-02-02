const Order = require('../../models/order');

module.exports = {
    cart,
    addToCart,
    updateCart,
    setItemQtyInCart,
    checkout

}

async function cart(req, res) {
  // A cart is the unpaid order for a user
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}


async function addToCart(req, res) {
    // Add the item to the cart
    const cart = await Order.getCart(req.user._id);
    await cart.addVinoToCart(req.params.id);
    // console.log(cart);
    res.json(cart);
  }

async function updateCart(req, res) {
    const updatedCart = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCart);
  }

  // Updates an item in the cart's qty
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty); 
  res.json(cart);
}

  async function checkout(req, res) {
    // Update the cart's isPaid property to true
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save(); 
    res.json(cart);
  }
  