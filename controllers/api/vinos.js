const Vino = require('../../models/vino');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const vinos = await Vino.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  vinos.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(vinos);
}

async function show(req, res) {
  const vino = await Vino.findById(req.params.id);
  res.json(vino);
}
