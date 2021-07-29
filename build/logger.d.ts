import Winston from 'winston';
export declare type LoggerOptions = {
    maxLevel: string;
    file: string | false;
    stdout: boolean;
    colorize: boolean;
};
export declare const LoggerBuilder: (loggerOptions: LoggerOptions) => Winston.LoggerInstance;
//# sourceMappingURL=logger.d.ts.map