import ProductsManager from '../manager/productsManager.js';
import express from 'express';

const app = express();
const container = new ProductsManager('../files/products.json');

app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  return res.send(`<div>
    <h1 style="color:blue; text-align:center" >Bienvenidos a Glitch de Bruno Rolon</h1>
  <h2 style="text-align:center">Camada: 39760</h2>
  <img src=https://avatars.githubusercontent.com/leobrunorolon alt="BrunoRolon" width="460" height="345">
  <a href="https://github.com/leobrunorolon/backend-39760"><h2>Github</h2></a>
  <a href="/products"><h2>Products</h2></a>
  </div>`);
});

app.get('/products', async (req, res) => {
  try {
    const products = await container.getProducts();
    res.send(products);
    console.log(products);
  } catch (err) {
    res.status(404).send(err);
  }
});

// app.get('/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     res.send(manager.getById(parseInt(id)));
//   } catch (err) {
//     res.status(404).send(err);
//   }
// });

// app.post('/', (req, res) => {
//   try {
//     const data = req.body;
//     manager.save(data);
//     res.redirect('/');
//   } catch (err) {
//     res.status(404).send(err);
//   }
// });

// app.put('/:product', (req, res) => {
//   try {
//     const newProduct = req.body;
//     res.send(manager.addProduct(newProduct));
//   } catch (err) {
//     res.status(404).send(err.msg);
//   }
// });

// app.delete('/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     res.send(manager.deleteById(parseInt(id)));
//   } catch (err) {
//     res.status(404).send(err.msg);
//   }
// });

app.listen(8080, () => console.log('Listening on port 8080'));
