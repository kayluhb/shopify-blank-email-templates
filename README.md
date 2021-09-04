# Shopify Blank Email Templates

A repository to host blank Shopify email templates.

Shopify's default email templates have all the necessary liquid, but aren't indented, are inconsistent across templates, and have several bugs. This repository is an effort to scrub them of all extra markup and indent everything consistently so it's a better starting point for creating custom emails.


- [Order confirmation](templates/order-confirmation.liquid)
Sent automatically to the customer after they place their order.

- [Order edited](templates/order-edited.liquid)
Sent to the customer after their order is edited (if you select this option).

- [Order edited invoice](templates/order-edited-invoice.liquid)
Sent to the customer after their order is edited and they owe money (if you select this option).

- [Order invoice](templates/order-invoice.liquid)
Sent to the customer when the order has an outstanding balance.

- [Order canceled](templates/order-canceled.liquid)
Sent automatically to the customer if their order is canceled (if you select this option).

- [Order refund](templates/order-refund.liquid)
Sent automatically to the customer if their order is refunded (if you select this option).

- [Draft order invoice](templates/draft-order-invoice.liquid)
Sent to the customer when a draft order invoice is created. You can edit this email invoice before you send it.

- [Email cart from POS](templates/email-cart-from-pos.liquid)
Sent to the customer when you email their cart from POS. Includes a link to buy online.

- [Abandoned checkout](templates/abandoned-checkout.liquid)
Sent to the customer if they leave checkout before they buy the items in their cart. Configure options in "checkout settings".

- [POS and mobile receipt](templates/pos-and-mobile-receipt.liquid)
Sent to the customer after they complete an in person order and want to be emailed a receipt.

- [POS Exchange Receipt](templates/pos-exchange-receipt.liquid)
Sent to the customer after they complete an exchange in person and want to be emailed a receipt.

- [Gift card created](templates/gift-card-created.liquid)
Sent automatically to the customer when you issue or fulfill a gift card.

- [Payment error](templates/payment-error.liquid)
Sent automatically to the customer if their payment can’t be processed.

- [Fulfillment request](templates/fulfillment-request.liquid)
Sent automatically to a third-party fulfillment service provider when order items are fulfilled.

- [Shipping confirmation](templates/shipping-confirmation.liquid)
Sent automatically to the customer when their order is fulfilled (if you select this option).

- [Shipping update](templates/shipping-update.liquid)
Sent automatically to the customer if their fulfilled order’s tracking number is updated (if you select this option).

- [Out for delivery](templates/out-for-delivery.liquid)
Sent to the customer automatically after orders with tracking information are out for delivery.

- [Delivered](templates/delivered.liquid)
Sent to the customer automatically after orders with tracking information are delivered.

- [Ready for pickup](templates/ready-for-pickup.liquid)
Sent to the customer manually through Point of Sale or admin. Lets the customer know their order is ready to be picked up.

- [Picked up](templates/picked-up.liquid)
Sent to the customer when the order is marked as picked up.

- [Customer account invite](templates/customer-account-invite.liquid)
Sent to the customer with account activation instructions. You can edit this email before you send it.

- [Customer account welcome](templates/customer-account-welcome.liquid)
Sent automatically to the customer when they complete their account activation.

- [Customer account password reset](templates/customer-account-password-reset.liquid)
Sent automatically to the customer when they ask to reset their accounts password.

- [Customer payment method update request](templates/customer-payment-method-update-request.liquid)
Sent to the customer when they ask to update their stored payment method.

- [Contact customer](templates/contact_customer.liquid)
Sent to the customer when you contact them from the orders or customers page. You can edit this email before you send it.

- [Confirmation email](templates/confirmation-email.liquid)
Sent to the customer automatically when they sign up for email marketing (if email double opt-in is enabled).

- [Return instructions](templates/return-instructions.liquid)
Sent automatically to the customer when you create a return. Includes instructions as well as a return label, if applicable.

- [Return label instructions](templates/return-label-instructions.liquid)
Sent to the customer after creating a return label.