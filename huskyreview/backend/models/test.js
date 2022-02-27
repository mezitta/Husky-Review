const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let testSchema = new Schema ({
    name: {
        type: String
    }
}, {
    collection: 'stuff'
})

module.exports = mongoose.model('test', testSchema);