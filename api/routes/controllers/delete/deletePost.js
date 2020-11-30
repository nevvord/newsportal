module.exports = async (req, res) => {
  try {
    const post = await db.Posts.findOne({ _id: req.params.id })
    await post.remove()
    res.send({ msg: 'Пост удален успешно' })
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: 'Ошибка сервера' })
  }
}