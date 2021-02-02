const Schema = require('mongoose').Schema;

const vinoSchema = new Schema({
  name: { type: String, required: true },
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true, default: 0 },
  image: {type: String}
}, {
  timestamps: true
});

module.exports = vinoSchema;

