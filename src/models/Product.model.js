const {Schema, model} = require("mongoose");
const schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        dateAdded: {
            type: Date,
            default: Date.now()
        }
    }, {timestamps: true}
);

module.exports = model('Product', schema);