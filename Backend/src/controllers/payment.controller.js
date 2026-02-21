const productModel = require('../models/product.model');
const Razorpay = require('razorpay');
const paymentModel = require('../models/payment.model');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

async function createOrder(req, res) {
 
const product = await productModel.findOne();

const options = {
    amount: product.price.amount, // amount in smallest currency unit
    currency: product.price.currency,
  };

  
  try {
    const order = await razorpay.orders.create(options);

    const newPayment = await paymentModel.create({
      orderId: order.id,
      price: {
        amount: order.amount,
        currency: order.currency
      },
      currency: order.currency,
      status: 'PENDING',
    });

    console.log('Payment saved:', newPayment); // payments details saved in database
    res.status(200).json(order);

  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Error creating order' });
  }
}

module.exports = {
    createOrder
}