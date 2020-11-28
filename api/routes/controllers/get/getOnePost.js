module.exports = async (req, res) => {
  try {
    const post = await db.Posts.findOne({ _id: req.params.id })
    res.status(200).send({ post, msg: 'Пост найден' })
  } catch (error) {
    console.error(error)
    res.status(500).send({ msg: 'Ошибка сервера' })
  }
}