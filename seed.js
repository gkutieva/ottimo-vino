require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');


(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([
      {name: 'Red Wine', sortOrder: 10},
      {name: 'White Wine', sortOrder: 20},
      {name: 'Rose', sortOrder: 30}
    ]);


  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'BROVIA 2016 GARBLÈT SUÈ', category: categories[0], price: 92.00},
    {name: 'FRANCHETTI–PASSOPISCIARO', category: categories[0], price: 90.00},
    {name: "CIACCI PICCOLOMINID'ARAGONA", category: categories[0], price: 50.00},
    {name: 'CASTELLO DI NEIVE', category: categories[0], price: 40.00},


    {name: 'ABRUZZO PECORINO SUPERIORE', category: categories[1], price: 17.99},
    {name: "TERRE SICILIANE RAMÍ", category: categories[1], price: 24.99},
    {name: 'VERDICCHIO DI MATELICA', category: categories[1], price: 17.99},
    {name: 'CALABRIA ZIBIBBO', category: categories[1], price: 24.99},


    {name: "CAVALCHINA", category: categories[2], price: 17.00},
    {name: "LE FRAGHE", category: categories[2], price: 16.00},
    {name: "GUERRIERI RIZZARDI", category: categories[2], price: 16.00},
    {name: "FATTORIA FIBBIANO", category: categories[2], price: 22.00},
 
  ]);

  console.log(items)

  process.exit();

})();