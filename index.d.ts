export declare class Log {
    private static styles;
    private static ignore;
    private static isColorless;
    private static colors;
    private static getTime;
    private static getColoredStatus;
    static ignorePath(ignorePath: string): void;
    static useColorless(): void;
    static logCalls(request: any, response: any, next: any): void;
}
export declare const logExpress: typeof Log.logCalls;
