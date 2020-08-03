const jwt = require("jsonwebtoken")

const jwtMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization
    if (!authorization) return res.status(400).json({ error: "Auth token is required" })

    const parts = authorization.split(" ")

    if (parts.length != 2) return res.status(400).json({ error: "Token error" })

    const [schema, token] = parts

    if (schema != "Bearer") return res.status(400).json({ error: "Malformatted token" })

    jwt.verify(token, process.env.APP_KEY, (er, decoded) => {
        if (er) return res.status(401).json({ error: "Invalid token" })
        req.user_id = decoded.id
        next()
    })
}

module.exports = jwtMiddleware