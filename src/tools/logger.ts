import { createLogger, format, Logger, transports } from 'winston';

const env = process.env.NODE_ENV || 'development';
let logger: Logger;

if (env === 'development') {
  logger = createLogger({
    level:      'debug',
    format:     format.combine(
      format.timestamp(),
      format.json(),
      format.prettyPrint(),
      format.colorize({ all: true }),
    ),
    transports: [
      new transports.Console(),
    ],
  });
}
else {
  logger = createLogger({
    level:      'info',
    format:     format.combine(
      format.timestamp(),
      format.json(),
    ),
    transports: [
      new transports.Console(),
    ],
  });
}

export { logger };
