declare class Log {
    private static styles;
    private static colors;
    private static getTime;
    private static getColoredStatus;
    static logCalls(request: any, response: any, next: any): void;
}
export declare const logExpressCalls: typeof Log.logCalls;
export {};
