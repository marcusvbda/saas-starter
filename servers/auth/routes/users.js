const router = (require('express')).Router()
const usersController = require("../controllers/usersContoller")

router.post('/login', usersController.login)

module.exports = router