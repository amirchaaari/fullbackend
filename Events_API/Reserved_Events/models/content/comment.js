const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    content_id: {
        type: String,
        required: true
    },
    session_id: {
        type: String
    },
    status: {
        type: String,
        enum: ['draft', 'pending', 'active', 'paused', 'deleted_by_user', 'deleted_by_company'],
        default: 'draft'
    },
    ip: {
        type: String
    },
    browser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Browser'
    },
    app: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'App'
    },
    comment: {
        body: {
            type: String,
        },
        contact_email: {
            type: String,
        },
        parent_comment_id: {
            type: String,
        },
      
        root_content_id: {
            type: String,
        },
        images: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image'
        }],

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
    keyless_user_id: {
        type: String
    }
},);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
