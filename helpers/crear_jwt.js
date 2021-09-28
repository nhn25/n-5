var jwt = require('jsonwebtoken')

function generateToken(uid) {
  return token = jwt.sign(uid, 'password', {
     expiresIn: '24h' // expires in 24 hours
  })
}