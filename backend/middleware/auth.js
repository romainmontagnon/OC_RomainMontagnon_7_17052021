require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    //création d'un element supplementaire dans la representation de la requete :
    req.token = jwt.verify(token, process.env.TOKEN_KEY);
    next();
  } catch (error) {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};