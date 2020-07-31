const usersController = {
    login(req, res) {
        return res.status(200).send(req.body)
    }
}
module.exports = usersController