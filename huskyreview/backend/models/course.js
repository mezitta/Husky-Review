const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseSchema = new Schema({
    class_id: String,
    title: String
}, {
    collection: 'courses'
})

module.exports = mongoose.model('course', courseSchema);
