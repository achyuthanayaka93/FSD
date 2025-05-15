import express, { json } from 'express';

const app = express();
const PORT = 3000;

// Middleware
app.use(json()); // Parses JSON bodies

// Simple logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Static product list
const products = [
  { id: 1, name: "mi" },
  { id: 2, name: "iphone" },
  { id: 3, name: "oppo" }
];

// Routes

// Root
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// GET all products
app.get('/products', (req, res) => {
  res.send(products);
});

// GET product by ID
app.get('/products/:id', (req, res) => {
  const found = products.filter(item => item.id.toString() === req.params.id);
  res.send(found);
});

// POST new product
app.post('/addproducts', (req, res) => {
  const { id, name } = req.body;
  const newProduct = { id, name };
  products.push(newProduct);
  res.send(newProduct);
});

// PUT update product
app.put('/updateproducts/:id', (req, res) => {
  const product = products.find(item => item.id.toString() === req.params.id);
  if (product) {
    Object.assign(product, req.body);
    res.send(product);
  } else {
    res.status(404).send("Product not found");
  }
});

// DELETE product
app.delete('/deleteproducts/:id', (req, res) => {
  const index = products.findIndex(item => item.id.toString() === req.params.id);
  if (index !== -1) {
    const deleted = products.splice(index, 1);
    res.send(deleted);
  } else {
    res.status(404).send("Product not found");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
