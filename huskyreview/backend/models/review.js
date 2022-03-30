const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reviewSchema = new Schema({
    body: String, // primary text
    class_id: String, // i.e. CS3141
    class_name: String, // i.e. Team Software Project
    neg_score: { type: Number, default: 0 }, // non-credibility
    pos_score: { type: Number, default: 0 }, // credibility
    prof: String, // professor name
    rating: Number,
    title: String
}, {
    collection: 'reviews'
})

module.exports = mongoose.model('review', reviewSchema);
