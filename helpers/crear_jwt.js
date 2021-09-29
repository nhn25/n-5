const jwt = require('jsonwebtoken')
const crear_jwt = (nid = '') => {
 

  return new Promise((resolve, reject) => {
    
    const payload = { id };
    return token = jwt.sign(payload, process.env.SECRET, (err, token) => {
      expiresIn: '24h' // expires in 24 hours
    }, (err, token) => {
      if (err) {
        console.log(err);
        reject("error al crear el token");
      } else {
        resolve(token);
      }
    });
         
  });
  };
  
module.exports = {
    generar_jwt
} 