const express =  require('express');

const app = express();

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', function (req, res) {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', function (req, res) {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(paymentMethods);
});

app.post('/login', function (req, res) {
  const userName = req.body.userName;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.sendStatus(400);
  }
});

app.listen(7865, () => {
  console.log('API available on localhost');
});
