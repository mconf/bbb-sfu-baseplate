'use strict';
import Winston from 'winston';

export type LoggerOptions = {
  maxLevel: string;
  file: string | false;
  stdout: boolean;
  colorize: boolean;
}

export const LoggerBuilder = (loggerOptions: LoggerOptions) : Winston.LoggerInstance => {
  const WLogger: Winston.LoggerInstance = new Winston.Logger();
  const { maxLevel, file, stdout, colorize } = loggerOptions;

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
      colorize,
      handleExceptions: false,
      silent: false,
      maxLevel,
    });
  }


  if (file) {
    WLogger.add(Winston.transports.File, {
      timestamp: true,
      file,
      prettyPrint: false,
      maxLevel,
    });
  }

  return WLogger;
}
