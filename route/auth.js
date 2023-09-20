const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../model/schema");

// For Login
  router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: "email is Invalid" });
  const userPassword = await bcrypt.comapre(req.body.Password, User.Password);
  if (!userPassword)
    return res.status(400).send(`this is not a valid password`);
  else {
    res.send("Sucess");
  }
});
// --------------------------------------------------------------------------------------------------

// For register

router.post("/register", async (req, res) => {
  const existValidemail = await User.findOne({ email: req.body.email });
  if (existValidemail) {
    res.status(400).send("This email alredy exsist");
    return;
  }

  const saltRounds = 10;

  const hassespassword = await bcrypt.hash(req.body.password, saltRounds);
  console.log(hassespassword,"kk");
 

  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: hassespassword,
  });
  console.log(user, "gg");
 


  const newUser = await user.save();
  return res.send(newUser);
});

module.exports = router;
