const jwt = require("jsonwebtoken");

const jwtAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split("")[1];
  if (!token) {
    return res.status(401).json({ error: "unauthorized" });
  }
  try {
    const decoded=jwt.verify(token.process.env.JWT_SECRET);
    res.user=decoded;
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({error:'invalid'});
  }
};
const generateToken=(userData)=>{
    return jwt.sign(userData,process.env.JWT_SECRET);
}
module.exports={jwtAuthMiddleware,generateToken};