const { logger } = require("./logger");

const errorHandler = (err, req, res, next) => {
  logger(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, "errLog.txt");
  console.error(err.stack);

  res.status(500).send(err.message);
};

module.exports = errorHandler;
