const express =  require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', function (req, res) {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.listen(7865, () => {
  console.log('API available on localhost');
});
