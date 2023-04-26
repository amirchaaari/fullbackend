const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    content_id: { type: String, required: true },
    session_id: { type: String },
    status: {
        type: String,
        enum: ['draft', 'pending', 'active', 'paused', 'deleted_by_user', 'deleted_by_company'],
        default: 'draft'
    },
    ip: { type: String },
    browser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Browser'
    },
    app: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'App'
    },
    review: {
        subject: { type: String},
        body: { type: String },
        contact_email: { type: String },
        locations: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Address'
            }


        ],
        item_reviewed:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }

        ,
        reviewed_content_id: { type: String },
        rating: { type: Number },
        images: [{

            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image'

        }],
    },
    brand_name: { type: String },

    site_country: { type: String },
    site_domain: { type: String },
    keyless_user_id: { type: String },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
