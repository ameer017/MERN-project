require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const { logger, logEvent } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConnect");


connectDB();

const PORT = process.env.PORT || 4500;
// console.log(process.env.NODE_ENV);

app.use(logger);

// this will give our app the ability to process json
app.use(express.json());

app.use(cookieParser());

app.use(cors(corsOptions));

//serve static files
app.use(express.static("public"));

app.use("/", require("./routes/root"));

// error page routes/ catch all routes
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ err: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("MongoDB connected successfully");
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});

mongoose.connection.on('error', err => {
  console.log(err)
  logEvent(`${err.no}: ${err.code}\t${err.syscall}\t${err.hotsname}`, 'mongoErrLog.log')
})