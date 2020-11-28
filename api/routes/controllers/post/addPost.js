const { Types } = require('mongoose')
module.exports = async (req, res) => {
  const {
    title, smallContent, content, img 
  } = req.body
  try {
    const post = await new db.Posts({
      _id: Types.ObjectId(),
      title,
      content,
      smallContent,
      img
    })
    const savePost = await post.save()
    res.send({ msg: 'Новость добавлена' })
  } catch (error) {
    res.status(500).send({ msg: 'Ошибка сервера' })
  }
}