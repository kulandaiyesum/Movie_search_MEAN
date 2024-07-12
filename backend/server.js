require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConn");
const corsOptions = require("./config/corsOptions");
const {logger} = require('./middleware/logEvent');

const PORT = process.env.PORT || 3500;

const app = express();
connectDB();

app.use(logger);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "5mb" }));

app.use('/api/v1/movies',require('./routes/movie'));

mongoose.connection.once("open", () => {
  console.log("Connect to mangoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
