const postsController = {
    index(req, res) {
        return res.status(200).send(req.body)
    }
}
module.exports = postsController