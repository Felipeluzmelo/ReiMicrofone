const mongose = require("mongoose");

const productSchema = mangose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    _category: {
        type: mongose.Schema.Types.ObjectId,
        ref:"categories",
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
});

const Product = mangose.model("categories", productSchema);
model.exports = {Product}