const router = (require('express')).Router()

const postsController = require("../controllers/postsController")

router.post('/', postsController.index)

module.exports = router