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

app
  .get('/', function (req, res) {
    res.render('index', {});
  })
  .get('/abandoned-checkout', function (req, res) {
    res.render('abandoned-checkout', {});
  })
  .get('/confirmation-email', function (req, res) {
    res.render('confirmation-email', {});
  }).get('/contact-customer', function (req, res) {
    res.render('contact-customer', {});
  }).get('/customer-account-invite', function (req, res) {
    res.render('customer-account-invite', {});
  }).get('/customer-account-password-reset', function (req, res) {
    res.render('customer-account-password-reset', {});
  }).get('/customer-account-welcome', function (req, res) {
    res.render('customer-account-welcome', {});
  }).get('/customer-payment-method-update-request', function (req, res) {
    res.render('customer-payment-method-update-request', {});
  }).get('/delivered', function (req, res) {
    res.render('delivered', {});
  }).get('/draft-order-invoice', function (req, res) {
    res.render('draft-order-invoice', {});
  }).get('/email-cart-from-pos', function (req, res) {
    res.render('email-cart-from-pos', {});
  }).get('/fulfillment-request', function (req, res) {
    res.render('fulfillment-request', {});
  }).get('/gift-card-created', function (req, res) {
    res.render('gift-card-created', {});
  }).get('/order-canceled', function (req, res) {
    res.render('order-canceled', {});
  }).get('/order-confirmation', function (req, res) {
    res.render('order-confirmation', {});
  }).get('/order-edited-invoice', function (req, res) {
    res.render('order-edited-invoice', {});
  }).get('/order-edited', function (req, res) {
    res.render('order-edited', {});
  }).get('/order-invoice', function (req, res) {
    res.render('order-invoice', {});
  }).get('/order-refund', function (req, res) {
    res.render('order-refund', {});
  }).get('/out-for-delivery', function (req, res) {
    res.render('out-for-delivery', {});
  }).get('/payment-error', function (req, res) {
    res.render('payment-error', {});
  }).get('/picked-up', function (req, res) {
    res.render('picked-up', {});
  }).get('/pos-and-mobile-receipt', function (req, res) {
    res.render('pos-and-mobile-receipt', {});
  }).get('/pos-exchange-receipt', function (req, res) {
    res.render('pos-exchange-receipt', {});
  }).get('/ready-for-pickup', function (req, res) {
    res.render('ready-for-pickup', {});
  }).get('/return-instructions', function (req, res) {
    res.render('return-instructions', {});
  }).get('/return-label-instructions', function (req, res) {
    res.render('return-label-instructions', {});
  }).get('/shipping-confirmation', function (req, res) {
    res.render('shipping-confirmation', {});
  }).get('/shipping-update', function (req, res) {
    res.render('shipping-update', {});
  });

module.exports = app