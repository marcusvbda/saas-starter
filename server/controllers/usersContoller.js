const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const axios = require('axios')

const usersController = {
    async getAuthToken(req, res) {
        const { username } = req.body
        const { password } = req.body
        if (!username) return res.status(500).send({ error: 'username is required' })
        if (!password) return res.status(500).send({ error: 'password is required' })

        const user = await User.findOne({ username })
        if (!user) return res.status(400).send({ error: 'incorrect user' })

        // console.log(bcrypt.hashSync(password, password.length)) make hash

        if (!bcrypt.compareSync(password, user.password)) return res.status(400).send({ error: 'incorrect user' })

        const token = jwt.sign({ id: user._id }, process.env.APP_KEY, {
            expiresIn: 86400 //1 day
        })

        return res.status(200).send({ token })
    },
    async protectionTest(req, res) {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return res.status(200).send({ ok: true, data: result.data })
    }
}
module.exports = usersController