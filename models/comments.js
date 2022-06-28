const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    post: {type: Schema.Types.ObjectId, ref: Post},
    id: Number,
    name: String,
    email: String,
    body: String
})
module.exports = mongoose.model("Comment", CommentSchema)