const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.application.token;
  if (!token) {
    console.log("You are not logged in");
    res.redirect("/login");
  } else {
    jwt.verify(token, "secret", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  }
};

module.exports = { requireAuth };
