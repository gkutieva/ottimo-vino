const mongoose = require("mongoose");
const Order = mongoose.model("Order");

module.exports = {
    create,
    addToCart,
    updateCart,
    checkout

}

async function create(req, res) {
    if (!req.body) {
        return res.status(400).send({
            message: "Cart content can not be empty"
        });
    }
}

async function addToCart(req, res) {
    // Add the item to the cart
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.json(cart);
  }

async function updateCart(req, res) {
    const updatedCart = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCart);
  }

  async function checkout(req, res) {
    // Update the cart's isPaid property to true
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save(); 
    res.json(cart);
  }
  