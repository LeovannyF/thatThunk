
const {db, Product, syncSeed} = require('./db/models.js');
const {app} = require('./server');

app.get('/index.html', (req, res, next) => {
})

app.get('/api/products', (req, res, next) => {
   Product.findAll()
   .then(products => res.send(products))
   .catch(next);
})

app.post('/api/products', (req, res, next) => {
  let product = req.body;
  Product.create(product)
  .then(product => {
    res.json(product)
  })
})

app.delete('/api/products/:id', (req, res, next) => {
  Product.findById(req.params.id)
  .then(product => product.destroy())
  .catch(next)
})

const init = async () => {
  await db.sync( {force: true} )
  await syncSeed()
}
init();
