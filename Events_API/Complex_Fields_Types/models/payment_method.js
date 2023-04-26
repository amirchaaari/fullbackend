const mongoose = require('mongoose');

const paymentMethodSchema = new mongoose.Schema({
  payment_type: {
    type: String,
    enum: ['$cash', '$check', '$credit_card', '$crypto_currency', '$debit_card', '$digital_wallet', '$electronic_fund_transfer', '$financing', '$gift_card', '$invoice', '$in_app_purchase', '$money_order', '$points', '$prepaid_card', '$store_credit', '$third_party_processor', '$voucher', '$sepa_credit', '$sepa_instant_credit', '$sepa_direct_debit', '$ach_credit', '$ach_debit', '$wire_credit', '$wire_debit'],
    required: true
  },
  payment_gateway: {
    type: String
  },
  card_bin: {
    type: String
  },
  card_last4: {
    type: String
  },
  avs_result_code: {
    type: String
  },
  cvv_result_code: {
    type: String
  },
  verification_status: {
    type: String,
    enum: ['$success', '$failure', '$pending']
  },
  routing_number: {
    type: String
  },
  shortened_iban_first6: {
    type: String
  },
  shortened_iban_last4: {
    type: String
  },
  sepa_direct_debit_mandate: {
    type: Boolean
  },
  decline_reason_code: {
    type: String
  },
  wallet_address: {
    type: String
  },
  wallet_type: {
    type: String,
    enum: ['$crypto', '$digital', '$fiat']
  },
  paypal_payer_id: {
    type: String
  },
  paypal_payer_email: {
    type: String
  },
  paypal_payer_status: {
    type: String
  },
  paypal_address_status: {
    type: String
  },
  paypal_protection_eligibility: {
    type: String
  },
  paypal_payment_status: {
    type: String
  },
  stripe_cvc_check: {
    type: String
  },
  stripe_address_line1_check: {
    type: String
  },
  stripe_address_line2_check: {
    type: String
  },
  stripe_address_zip_check: {
    type: String
  },
  stripe_funding: {
    type: String
  },
  stripe_brand: {
    type: String
  },
  account_holder_name: {
    type: String
  },
  account_number_last5: {
    type: String
  },
  bank_name: {
    type: String
  },
  bank_country: {
    type: String
  }
});

const PaymentMethod = mongoose.model('PaymentMethod', paymentMethodSchema);

module.exports = PaymentMethod;
