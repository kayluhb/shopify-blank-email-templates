const express = require('express')
const path = require('path')
const { Liquid } = require('liquidjs')
const { buildReviewShell } = require('./review-shell')
const { templates, templateIds } = require('./routes')

const app = express()
const engine = new Liquid({
  root: __dirname,
  extname: '.liquid',
})

engine.registerFilter('shopify_asset_url', (assetPath) => `/assets/${assetPath}`)
engine.registerFilter('money_without_trailing_zeros', (value) => value)
engine.registerFilter('money_with_currency', (value) => value)
engine.registerFilter('format_code', (value) => value)

app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.engine('liquid', engine.express())
app.set('views', ['./templates'])
app.set('view engine', 'liquid')

const customer = {
  account_activation_url: 'https://shopify.com',
  first_name: 'Jane',
  subscribe_url: 'https://shopify.com',
}
const shop = {
  email: 'info@shopify.com',
  email_accent_color: 'blue',
  name: 'My Shop',
  url: 'https://shopify.com',
}
const giftCard = {
  balance: '$50',
  initial_value: '$50.00 USD',
  code: 'ABCD EFGH IJKL MNOP',
  url: 'https://shopify.com/gift_cards/example',
  pass_url: 'https://shopify.com/gift_cards/example/pass',
  expires_on: '2027-12-31',
  message: 'Happy birthday! Hope you find something you love.',
  send_on: '2026-07-15',
  recipient: {
    name: 'Alex Recipient',
    email: 'alex@example.com',
    nickname: 'Alex',
  },
}

const customerTemplates = new Set([
  'confirmation-email',
  'customer-account-invite',
  'order-confirmation',
  'order-missed-local-delivery',
])

const giftCardTemplates = new Set(['gift-card-created', 'gift-card-receipt'])

function getPreviewContext(id) {
  const context = { shop }
  if (customerTemplates.has(id)) context.customer = customer
  if (giftCardTemplates.has(id)) context.gift_card = giftCard
  return context
}

app.get('/', (req, res) => {
  res.render('index', { shop })
})

app.get('/preview/:id', (req, res, next) => {
  const { id } = req.params
  if (!templateIds.includes(id)) return next()
  res.render(id, getPreviewContext(id))
})

app.get('/:id', (req, res, next) => {
  const { id } = req.params
  if (!templateIds.includes(id)) return next()
  const active = templates.find((t) => t.id === id)
  const html = buildReviewShell({
    templates,
    activeId: id,
    title: `${active?.label || id} · Shopify Blank Email Templates`,
  })
  res.type('html').send(html)
})

module.exports = app
