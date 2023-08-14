declare class Log {
    private static styles;
    private static ignorePath;
    private static colors;
    private static getTime;
    private static getColoredStatus;
    static logIgnorePath(ignorePath: string): void;
    static logCalls(request: any, response: any, next: any): void;
}
export declare const logExpress: typeof Log.logCalls;
export declare const logIgnorePath: typeof Log.logIgnorePath;
export {};
