const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Running on the port ${PORT}`));
const User = require("./model/schema");
const auth = require("./route/auth")
mongoose.connect(process.env.MONGOOSE_URL).catch((err) => console.log(err));

app.use(express.json(), cors());
app.use("/", auth)
