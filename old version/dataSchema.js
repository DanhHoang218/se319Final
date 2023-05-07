const mongoose = require('mongoose')
const ReactFormDataSchema = new mongoose.Schema({
    _id: { type: Number },
    question: { type: String },
    answer: { type: String },
    keywords: {keyword0 : { type: String}, keyword1:  {type:String}, keyword2: {type:String}}
},
    { collection: "qanda" }
)
const Question = mongoose.model('Product', ReactFormDataSchema)
module.exports = Question;

