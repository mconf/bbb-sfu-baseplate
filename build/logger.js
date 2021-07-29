'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerBuilder = void 0;
const winston_1 = __importDefault(require("winston"));
const LoggerBuilder = (loggerOptions) => {
    const WLogger = new winston_1.default.Logger();
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
        WLogger.add(winston_1.default.transports.Console, {
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
        WLogger.add(winston_1.default.transports.File, {
            timestamp: true,
            file,
            prettyPrint: false,
            maxLevel,
        });
    }
    return WLogger;
};
exports.LoggerBuilder = LoggerBuilder;
