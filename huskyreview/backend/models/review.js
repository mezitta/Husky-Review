const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reviewSchema = new Schema({
    body: {
        type: String, // primary text
        trim: true,
        required: false
    },
    class_id: {
        type: String, // e.g. CS3141
        trim: true,
        required: [true, 'class id not optional']
    },
    class_name: {
        type: String, // e.g. Team Software Project
        trim: true,
        required: [true, 'class name not optional']
    },
    prof: {
        type: String, // professor name
        trim: true,
        required: [true, 'professor name not optional']
    },
    rating: {
        type: Number, // 0-5 stars
        required: [true, 'rating not optional'],
        min: 0,
        max: 5
    },
    title: {
        type: String, // summary text
        trim: true,
        required: [true, 'review title not optional'],
        maxLength: 72
    }
}, {
    collection: 'reviews'
})

module.exports = mongoose.model('review', reviewSchema);
