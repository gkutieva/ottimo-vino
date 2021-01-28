const mongoose = require("mongoose");
const Order = mongoose.model("Order");

module.exports = {
    create,
    addToCart,
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