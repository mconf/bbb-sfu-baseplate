'use strict';

const Winston = require('winston');

type LoggerConfig = {
  level: string;
  filename: string;
  stdout: boolean;
}

const LoggerBuilder = (LOG_CONFIG: LoggerConfig) => {
  const WLogger = new Winston.Logger();
  const { level, filename, stdout = true } = LOG_CONFIG;
  const COLORIZE = process.env.NODE_ENV !== 'production';

  WLogger.configure({
    levels: { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, trace: 5 },
    colors: {
      error: 'red',
      warn: 'yellow',
      info: 'green',
      verbose: 'cyan',
      debug: 'magenta',
      trace: 'gray'
    },
  });

  if (stdout) {
    WLogger.add(Winston.transports.Console, {
      timestamp: true,
      prettyPrint: false,
      humanReadableUnhandledException: true,
      colorize: COLORIZE,
      handleExceptions: false,
      silent: false,
      level,
    });
  }


  if (filename) {
    WLogger.add(Winston.transports.File, {
      timestamp: true,
      filename,
      prettyPrint: false,
      level,
    });
  }

  return WLogger;
}

export default LoggerBuilder;
