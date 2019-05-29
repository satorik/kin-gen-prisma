import jwt from 'jsonwebtoken'

const token = userId => jwt.sign({userId}, process.env.TOKEN_SECRET, { expiresIn: '7 days'})

export {token as default}