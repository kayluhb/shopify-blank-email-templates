# Shopify Blank Email Templates

A repository to host blank Shopify email templates.

Shopify's default email templates have all the necessary Liquid, but aren't indented, are inconsistent across templates, and have several bugs. This repository is an effort to scrub them of all extra markup and indent everything consistently so it's a better starting point for creating custom emails.

This repo covers all **41 customer notification** templates available in Shopify admin under **Settings → Notifications → Customer notifications**, plus the **Fulfillment request** template for third-party fulfillment services. Cross-referenced with [Shopify Help Center: Store notifications](https://help.shopify.com/en/manual/orders/notifications) and the [Notifications variables reference](https://help.shopify.com/en/manual/orders/notifications/email-variables).

## Local preview

```bash
yarn install
node index.js
```

Open [http://localhost:5050](http://localhost:5050) for links to each template.

## Audit summary

| Status | Count |
| --- | --- |
| Customer notifications | 42 |
| Fulfillment service notifications | 1 |
| Removed (deprecated by Shopify) | 1 |

### Removed (no longer in Shopify)

| Former file | Shopify admin name | Reason |
| --- | --- | --- |
| `order-edited-invoice.liquid` | Order edited invoice | Removed by Shopify. Outstanding balances from order edits now use the [Order invoice](#order-invoice) template with [payment terms](https://help.shopify.com/en/manual/orders/notifications/edit-template). |

### Renamed (to match current Shopify admin names)

| Old file | New file | Shopify admin name |
| --- | --- | --- |
| `return-instructions.liquid` | `return-created.liquid` | Return created |
| `return-label-instructions.liquid` | `order-level-return-label-created.liquid` | Order-level return label created |

## Customer notifications

### Orders

- [Order confirmation](templates/order-confirmation.liquid) — Sent automatically after the customer places an order.
- [Order edited](templates/order-edited.liquid) — Sent after an order is edited (when notification is enabled).
- [Order invoice](templates/order-invoice.liquid) — Sent when an order has an outstanding balance. Also used when an edited order requires additional payment.
- [Order canceled](templates/order-canceled.liquid) — Sent when an order is canceled (when notification is enabled).
- [Order refund](templates/order-refund.liquid) — Sent when an order is refunded (when notification is enabled).
- [Order payment receipt](templates/order-payment-receipt.liquid) — Sent after you charge a customer's saved payment method.
- [Draft order invoice](templates/draft-order-invoice.liquid) — Sent when a draft order invoice is created.
- [Abandoned checkout](templates/abandoned-checkout.liquid) — Sent when a customer abandons checkout (when automation is enabled).
- [Payment error](templates/payment-error.liquid) — Sent when a payment cannot be processed at checkout.
- [Pending payment success](templates/pending-payment-success.liquid) — Sent when a pending payment is successfully processed after checkout.
- [Pending payment error](templates/pending-payment-error.liquid) — Sent when a pending payment cannot be processed after checkout.
- [Payment reminder](templates/payment-reminder.liquid) — Sent on or after the due date for unpaid orders.
- [Gift card created](templates/gift-card-created.liquid) — Sent when a gift card is issued or fulfilled.
- [Gift card receipt](templates/gift-card-receipt.liquid) — Sent when a customer adds a recipient to their gift card.

### Shipping and delivery

- [Shipping confirmation](templates/shipping-confirmation.liquid) — Sent when an order is fulfilled (when notification is enabled).
- [Shipping update](templates/shipping-update.liquid) — Sent when a fulfilled order's tracking number is updated.
- [Out for delivery](templates/out-for-delivery.liquid) — Sent when fulfillment status changes to out for delivery.
- [Delivered](templates/delivered.liquid) — Sent when fulfillment status changes to delivered.
- [Ready for pickup](templates/ready-for-pickup.liquid) — Sent when an order is ready for local pickup.
- [Picked up](templates/picked-up.liquid) — Sent when an order is marked as picked up.
- [Order out for local delivery](templates/order-out-for-local-delivery.liquid) — Sent when a local delivery order is out for delivery.
- [Order locally delivered](templates/order-locally-delivered.liquid) — Sent when a local delivery order is delivered.
- [Order missed local delivery](templates/order-missed-local-delivery.liquid) — Sent when a local delivery is missed.

### POS

- [Email cart from POS](templates/email-cart-from-pos.liquid) — Shopify admin: **POS abandoned checkout**. Sent when a POS cart is emailed so the customer can complete checkout online.
- [POS email to customer](templates/pos-email-to-customer.liquid) — Sent when a customer leaves POS checkout before completing their purchase.
- [POS and mobile receipt](templates/pos-and-mobile-receipt.liquid) — Sent after an in-person order when the customer requests an emailed receipt.
- [POS exchange receipt](templates/pos-exchange-receipt.liquid) — Sent after an in-person exchange when the customer requests an emailed receipt.
- [POS exchange V2 receipt](templates/pos-exchange-v2-receipt.liquid) — Sent after an Exchange V2 in person when the customer requests an emailed receipt.

### Returns

- [Return created](templates/return-created.liquid) — Sent when you create a return. Includes return label instructions when applicable.
- [Order-level return label created](templates/order-level-return-label-created.liquid) — Sent after creating a return label at the order level.
- [Return request received](templates/return-request-received.liquid) — Sent when a customer requests a return.
- [Return request approved](templates/return-request-approved.liquid) — Sent when you approve a return request.
- [Return request declined](templates/return-request-declined.liquid) — Sent when a return request is declined.

### Customer account and marketing

- [Customer account invite](templates/customer-account-invite.liquid) — Sent with account activation instructions.
- [Customer account welcome](templates/customer-account-welcome.liquid) — Sent when account activation is completed.
- [Customer payment method update request](templates/customer-payment-method-update-request.liquid) — Shopify admin: **Payment method update request**.
- [Payment method restore request](templates/payment-method-restore-request.liquid) — Sent when a customer needs to verify their payment information.
- [Contact customer](templates/contact-customer.liquid) — Sent when you contact a customer from the admin.
- [Confirmation email](templates/confirmation-email.liquid) — Shopify admin: **Email marketing confirmation**. Sent when a customer signs up for email marketing with double opt-in enabled.

### B2B

- [B2B access email](templates/b2b-access-email.liquid) — Sent when a customer is invited to place B2B orders.
- [B2B location update payment method](templates/b2b-location-update-payment-method.liquid) — Sent when a customer requests to update their payment method for a B2B location.

## Fulfillment service notifications

These are sent to third-party fulfillment providers, not customers.

- [Fulfillment request](templates/fulfillment-request.liquid) — Sent to a fulfillment service when order items are assigned for fulfillment.

## Other notification categories (out of scope)

These are managed separately in Shopify admin and are not part of this repo:

- **Legacy customer account password reset** — Only applies to [legacy customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/legacy-customer-accounts). [New customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) use passwordless sign-in, so this notification is no longer used.
- **Staff notifications** — e.g. New order, Store order summary
- **SMS notifications** — Order confirmation text messages
- **Subscription notifications** — Available when the [Shopify Subscriptions](https://help.shopify.com/en/manual/products/purchase-options/subscriptions) app is installed
- **Webhooks** — For custom integrations

## References

- [Store notifications](https://help.shopify.com/en/manual/orders/notifications)
- [Customizing email notification templates](https://help.shopify.com/en/manual/orders/notifications/edit-template)
- [Notifications variables reference](https://help.shopify.com/en/manual/orders/notifications/email-variables)
- [Updating email notifications for exchanges](https://help.shopify.com/en/manual/fulfillment/setup/notifications/exchange-notifications)
