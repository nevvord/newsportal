module.exports = async (req, res) => {
  try {
    const posts = await db.Posts.find({})
    res.send({ posts, msg: 'Посты найдены' })
  } catch (error) {
    console.error(error)
    res.status(500).send({ msg: 'Ошибка сервера' })
  }
}