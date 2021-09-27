var jwt = require('jsonwebtoken')

function generateToken(user) {
  var u = {
   username: user.username,
   email: user.email,
   password: user.password,
   rol: user.rol,
   id: user.id
  }
  return token = jwt.sign(u, 'password', {
     expiresIn: 60 * 60 * 24 // expires in 24 hours
  })
}