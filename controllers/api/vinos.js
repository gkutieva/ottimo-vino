const Vino = require('../../models/item');

module.exports = {
    index,

}

async function index(req, res) {
    const vinos = await Vino.find({});
    res.status(200).json(vinos);
}