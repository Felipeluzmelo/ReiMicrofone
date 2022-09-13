const mongose = require("mongoose");

const categorySchema = mangose.Schema({
    name: {
        type: String,
        require: true
    },
    description:{
        type: String,
    }
})

const Category = mangose.model("categories", categorySchema);
model.exports = {Category}