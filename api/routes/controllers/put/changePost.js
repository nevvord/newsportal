module.exports = async (req, res) => {
  const {
    title, smallContent, content, img 
  } = req.body
  try {
    const post = await db.Posts.findOne({ _id: req.params.id })
    post.title = title
    post.smallContent = smallContent
    post.content = content
    post.img = img
    const save = await post.save()
    res.send({ post, msg: 'Пост изменен успешно' })
  } catch (error) {
    res.status(500).send({ msg: 'Ошибка червера' })
  }
}