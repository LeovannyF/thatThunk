Sequelize = require('Sequelize');
const db = new Sequelize(process.env.DATABASE || 'postgres://localhost:5432/thatThunk');
const {products} = require ('./seed');

const Product = db.define('product', {
  productName: {
    type: Sequelize.STRING,
    unique: true

  },
  rating: {
    type: Sequelize.INTEGER

  }
})

const syncSeed = async () => {
  const [shoes, belt, shirts, cups] = await Promise.all(products.map(product => {
    return Product.create(product)
  }))
}

module.exports = {
  db,
  Product,
  syncSeed
}
