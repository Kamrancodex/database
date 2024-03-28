const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://rohitvlogs02:RwH0X8bJF3IpfoxL@cluster0.lhw3atd.mongodb.net/"
);
const User = mongoose.model("user", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = await User.findOne({ email: username });
  if (existingUser) {
    res.status(404).send("User exists Already");
  } else {
    const user = new User({
      name: name,
      email: username,
      password: password,
    });
    user.save();
    res.json({
      msg: "sucessfully registered",
    });
  }
});

// app.put("/updateinfo", function (req, res) {
//   const username=req.headers.put
// });
app.listen(port, () => {
  console.log(`listening`);
});
