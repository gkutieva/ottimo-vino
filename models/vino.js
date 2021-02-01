const mongoose = require('mongoose');

require('./category');
const vinoSchema = require('./vinoSchema');

module.exports = mongoose.model('Vino', vinoSchema);