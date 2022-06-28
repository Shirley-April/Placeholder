const mongoose = require("mongoose")


const PostSchema = new mongoose.Schema({
    user: {type: Schema.Types.ObjectID, ref: User},
    id: Number,
    title: String,
    body: String
})

module.exports = mongoose.model('Post', PostSchema)