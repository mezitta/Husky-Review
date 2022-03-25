const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reviewSchema = new Schema({
    body: String, // primary text
    class_id: String, // i.e. CS3141
    class_name: String, // i.e. Team Software Project
    neg_score: Number, // non-credibility
    pos_score: Number, // credibility
    prof: String, // professor name
    rating: Number,
    title: String
}, {
    collection: 'reviews'
})

module.exports = mongoose.model('review', reviewSchema);
