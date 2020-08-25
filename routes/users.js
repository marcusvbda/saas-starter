const router = (require('express')).Router()
const usersController = require("../controllers/usersContoller")
const jwt = require("../middlewares/jwt")

router.post('/get-auth-token', usersController.getAuthToken)
router.post('/protection-test', [jwt], usersController.protectionTest)

module.exports = router