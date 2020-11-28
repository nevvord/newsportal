module.exports = (mongoose, conn) =>
  conn.model('Posts', new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    title: String,
    smallContent: String,
    content: String,
    img: String
  }))