const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
 
    session_id: {
        type: String
    },
    user_email: {
        type: String
    },
    verification_phone_number: {
        type: String
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    referrer_user_id: {
        type: String
    },
    payment_methods: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PaymentMethod'
          },],
    billing_address: {
        type: mongoose.Schema.Types.ObjectId,
            ref: 'Address'
    },
    shipping_address:{
        type: mongoose.Schema.Types.ObjectId,
            ref: 'Address'
    },
    promotions: [
        {
            type: mongoose.Schema.Types.ObjectId,
                ref: 'Promotion'
        }
    ],
    social_sign_on_type: {
        type: String,
        enum: [
            "facebook",
            "google",
            "linkedin",
            "twitter",
            "yahoo",
            "microsoft",
            "amazon",
            "apple",
            "wechat",
            "github",
            "other"
        ]
    },
    browser:{
        type: mongoose.Schema.Types.ObjectId,
            ref: 'Browser'
    },
    app: {
        type: mongoose.Schema.Types.ObjectId,
            ref: 'App'
    },
    account_types:{
        type:[String],
        enum: [
            "merchant",
            "shopper",
            "premium",
            "regular",
            
        ]
},
    brand_name: {
        type: String
    },
    site_country: {
        type: String
    },
    site_domain: {
        type: String
    },
    merchant_profile:{
        type: mongoose.Schema.Types.ObjectId,
            ref: 'MerchantProfile'
    },
    keyless_user_id: {
        type: String
    }
})



const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;