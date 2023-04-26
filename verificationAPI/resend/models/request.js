const mongoose = require('mongoose');

const requestResendSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    verified_event: {
        type: String,
        enum: ['add_item_to_cart', 'add_promotion', 'content_status',
            'create_account', 'create_content', 'create_order',
            'flag_content', 'login', 'order_status',
            'remove_item_from_cart', 'transaction',
            'update_account', 'update_content', 'update_order',
            'update_password']
    },
    verified_entity_id: {
        type: String
    }
});


const requestResend = mongoose.model('requestResend', requestResendSchema);

module.exports = requestResend;




