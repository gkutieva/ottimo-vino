require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/vino');


(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([
      {name: 'Red Wine', sortOrder: 10},
      {name: 'White Wine', sortOrder: 20},
      {name: 'Rose', sortOrder: 30}
    ]);


  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'BROVIA 2016 GARBLÈT SUÈ', url: 'https://i.imgur.com/0rua3Ae.png', category: categories[0], description: " Wild berry, iris, menthol, star anise and new leather aromas follow over to the precise, full-bodied palate along with juicy cherry, raspberry compote and tobacco. Boasting elegance and structure in equal measure, it has taut, refined tannins and fresh acidity that will give this decades of drinking pleasure.", price: 92.00},
    {name: 'FRANCHETTI–PASSOPISCIARO', url: 'https://imgur.com/DAvGi5f.jpg', category: categories[0], description: "Fragrant and loaded with finesse, this gorgeous red stuns with captivating scents of pressed rose, violet, red berry, white pepper as well as whiffs of smoke and balsamic notes. Boasting extreme elegance and intensity, the smooth, delicious palate delivers strawberry jelly, raspberry compote, cinnamon and flinty mineral framed in smooth, silky tannins. Made from some of the highest vineyards on Mount Etna and 100-year-old vines, it’s endowed with bright acidity that keeps it superbly balanced.", price: 90.00},
    {name: "CIACCI PICCOLOMINID'ARAGONA", url: 'https://imgur.com/9vSMilJ.jpg', category: categories[0], description: "Enticing aromas of ripe wild berry, iris, camphor and sunbaked soil take shape in the glass. Full in feel and enveloping, the smooth, delicious palate doles out juicy Marasca cherry, raspberry jam, licorice and tobacco while firm, velvety tannins provide support. It boasts concentration and structure but also balance, thanks to the fruit richness and freshness.", price: 50.00},
    {name: 'CASTELLO DI NEIVE', url: 'https://imgur.com/Cq9nDDs.jpg', category: categories[0], description: "Aromas of ripe black-skinned fruit, fragrant blue flowers, new leather and a whiff of menthol form the alluring nose. Full in feel and savory, the enveloping palate doles out fleshy Marasca cherry, raspberry compote, crushed mint and tobacco set against firm, fine-grained tannins.", price: 40.00},


    {name: 'ABRUZZO PECORINO SUPERIORE', url: 'https://imgur.com/e19JrlJ.jpg', category: categories[1], description: "This wine, made from biodynamically grown grapes, is absolutely delicious: rich, textured, high in acid but substantial and concentrated. Helped to round the sharp edges. This will be terrific with a pasta dish of garlic, anchovies and cherry tomatoes.", price: 17.99},
    {name: "TERRE SICILIANE RAMÍ", url: 'https://imgur.com/9mMADEM.jpg', category: categories[1], description: "This wine is vibrant and energetic, with aromas of flowers and almonds, and a spine of electric acidity, typical of the inland, higher elevation Matelica area.", price: 24.99},
    {name: 'VERDICCHIO DI MATELICA', url: 'https://imgur.com/R6uFn0G.jpg', category: categories[1], description: "Organic wine, taught, lean, crisp and bright, well rounded, subtle floral notes and hints of earth under the citrus fruit. Pure earthy notes come through on the palate with tangy ginger and mushroom, finishing with a soft nutty undertone.", price: 17.99},
    {name: 'CALABRIA ZIBIBBO', url: 'https://imgur.com/xbUVThl.jpg', category: categories[1], description: "It's no wonder that this wine is pungent and perfumed. Zibibbo is the southern Italian name for muscat of Alexandria, one of a notoriously fragrant family of grapes. Mostly, it is made into sweet wine on Sicily and on the island of Pantelleria, but I've seen more dry versions recently.", price: 24.99},


    {name: "CAVALCHINA", url: 'https://imgur.com/q3binIS.jpg', category: categories[2], description: "Inviting floral and wild berry aromas mingle with whiffs of botanical herbs. On the savory, refreshing palate, tangy acidity accompanies pomegranate, juicy pink grapefruit and creamy white peach.", price: 17.00},
    {name: "LE FRAGHE", url: 'https://imgur.com/0MH0JMy.jpg', category: categories[2], description: "A blend of organically farmed Corvina (80%) and Rondinella (20%), this elegant rosato opens with enticing scents of spring field flower, aromatic herb, ripe peach and a whiff of baking spice. Smooth, bright and juicy, the savory, easy-drinking palate offers wild red berry, tangerine zest and a hint of white pepper alongside tangy acidity.", price: 16.00},
    {name: "GUERRIERI RIZZARDI", url: 'https://imgur.com/dBn9utX.jpg', category: categories[2], description: "Sleek and vibrant, this has alluring aromas of white and yellow spring flower, wild berry and yellow stone fruit. The succulent palate has more structure than most Chiarettos, offering sour cherry, juicy strawberry, honeydew melon and a hint of baking spice before a crisp, dry finish.", price: 16.00},
    {name: "FATTORIA FIBBIANO", url: 'https://imgur.com/WDl01Og.jpg', category: categories[2], description: "A 100% Sangiovese rosé, this opens with inviting aromas of wild berries, grilled herbs and a whiff of culinary spices. On the bright, savory palate, hints of ground clove and white pepper accent juicy red cherry, white peach and citrus while bright acidity gives it a tangy finish.", price: 22.00},
 
  ]);

  console.log(items)

  process.exit();

})();