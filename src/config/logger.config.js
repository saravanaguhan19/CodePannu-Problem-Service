const winston = require("winston");
const { LOG_DB_URL } = require("./server.config");
require("winston-mongodb");

// The below transport configuration enables logging on the console
const allowedTransports = [];
allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      //Second argument to the combine method . which defines what is exactly going to be printed in the log
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]: ${log.message}`
      )
      // winston.format.simple()
    ),
  })
);

// The below transport configuration enables logging in the mongodb
allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "logs",
  })
);

// The below transport configuration enables logging in the file
allowedTransports.push(
  new winston.transports.File({
    filename: "app.log",
  })
);

const logger = winston.createLogger({
  format: winston.format.combine(
    //First argument to the combine method is defining how we want the timestamp to come up
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.errors({stack:true}),
    //Second argument to the combine method . which defines what is exactly going to be printed in the log
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
    )
  ),
  transports: allowedTransports,
});

module.exports = logger;
