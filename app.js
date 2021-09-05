const express = require('express')
const { Liquid } = require('liquidjs')

const app = express()
const engine = new Liquid({
  root: __dirname, // for layouts and partials
  extname: '.liquid'
})

app.engine('liquid', engine.express()) // register liquid engine
app.set('views', ['./templates']) // specify the views directory
app.set('view engine', 'liquid') // set to default

const customer = {
  account_activation_url: 'https://shopify.com',
  first_name: 'Jane',
  reset_password_url: 'https://shopify.com',
  subscribe_url: 'https://shopify.com',
};
const shop = {
  email: 'info@shopify.com',
  email_accent_color: 'blue',
  // email_logo_url: '',
  // email_logo_width: '',
  name: 'My Shop',
  url: 'https://shopify.com',
}
app
  .get('/', function (req, res) {
    res.render('index', { shop });
  })
  .get('/abandoned-checkout', function (req, res) {
    res.render('abandoned-checkout', { shop });
  })
  .get('/confirmation-email', function (req, res) {
    res.render('confirmation-email', { customer, shop });
  })
  .get('/contact-customer', function (req, res) {
    res.render('contact-customer', { shop });
  })
  .get('/customer-account-invite', function (req, res) {
    res.render('customer-account-invite', { customer, shop });
  })
  .get('/customer-account-password-reset', function (req, res) {
    res.render('customer-account-password-reset', { customer, shop });
  })
  .get('/customer-account-welcome', function (req, res) {
    res.render('customer-account-welcome', { shop });
  })
  .get('/customer-payment-method-update-request', function (req, res) {
    res.render('customer-payment-method-update-request', { shop });
  })
  .get('/delivered', function (req, res) {
    res.render('delivered', { shop });
  })
  .get('/draft-order-invoice', function (req, res) {
    res.render('draft-order-invoice', { shop });
  })
  .get('/email-cart-from-pos', function (req, res) {
    res.render('email-cart-from-pos', { shop });
  })
  .get('/fulfillment-request', function (req, res) {
    res.render('fulfillment-request', { shop });
  })
  .get('/gift-card-created', function (req, res) {
    res.render('gift-card-created', { shop });
  })
  .get('/order-canceled', function (req, res) {
    res.render('order-canceled', { shop });
  })
  .get('/order-confirmation', function (req, res) {
    res.render('order-confirmation', { customer, shop });
  })
  .get('/order-edited-invoice', function (req, res) {
    res.render('order-edited-invoice', { shop });
  })
  .get('/order-edited', function (req, res) {
    res.render('order-edited', { shop });
  })
  .get('/order-invoice', function (req, res) {
    res.render('order-invoice', { shop });
  })
  .get('/order-refund', function (req, res) {
    res.render('order-refund', { shop });
  })
  .get('/out-for-delivery', function (req, res) {
    res.render('out-for-delivery', { shop });
  })
  .get('/payment-error', function (req, res) {
    res.render('payment-error', { shop });
  })
  .get('/picked-up', function (req, res) {
    res.render('picked-up', { shop });
  })
  .get('/pos-and-mobile-receipt', function (req, res) {
    res.render('pos-and-mobile-receipt', { shop });
  })
  .get('/pos-exchange-receipt', function (req, res) {
    res.render('pos-exchange-receipt', { shop });
  })
  .get('/ready-for-pickup', function (req, res) {
    res.render('ready-for-pickup', { shop });
  })
  .get('/return-instructions', function (req, res) {
    res.render('return-instructions', { shop });
  })
  .get('/return-label-instructions', function (req, res) {
    res.render('return-label-instructions', { shop });
  })
  .get('/shipping-confirmation', function (req, res) {
    res.render('shipping-confirmation', { shop });
  })
  .get('/shipping-update', function (req, res) {
    res.render('shipping-update', { shop });
  });

module.exports = app