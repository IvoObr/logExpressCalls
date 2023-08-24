"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logExpress = exports.Log = void 0;
class Log {
    static getTime() {
        const time = new Date().toISOString().replace("T", " ").substring(0, 19);
        return `[${time}]`;
    }
    static getColoredStatus(status) {
        if (status >= 500)
            return Log.isColorless ? `${status}` : `${Log.colors.red}${status}${Log.styles.reset}`;
        if (status >= 400)
            return Log.isColorless ? `${status}` : `${Log.colors.yellow}${status}${Log.styles.reset}`;
        if (status >= 300)
            return Log.isColorless ? `${status}` : `${Log.colors.cyan}${status}${Log.styles.reset}`;
        if (status >= 200)
            return Log.isColorless ? `${status}` : `${Log.colors.green}${status}${Log.styles.reset}`;
        return `${status}`;
    }
    static ignorePath(ignorePath) {
        Log.ignore.push(ignorePath);
    }
    static useColorless() {
        Log.isColorless = true;
    }
    static logCalls(request, response, next) {
        const startTime = new Date().valueOf();
        response.on("finish", () => {
            var _a, _b;
            const endTime = new Date().valueOf() - startTime;
            const status = Log.getColoredStatus(response.statusCode);
            const url = (_a = response === null || response === void 0 ? void 0 : response.req) === null || _a === void 0 ? void 0 : _a.originalUrl;
            const method = (_b = response === null || response === void 0 ? void 0 : response.req) === null || _b === void 0 ? void 0 : _b.method;
            const timestamp = Log.getTime();
            let message;
            if (Log.isColorless) {
                message = `${timestamp} ${method}: ${url} ${status} ${endTime}ms`;
            }
            else {
                message = `${Log.styles.bold}${timestamp} ${method}: ${url} ${status} ${endTime}ms${Log.styles.reset}`;
            }
            if (Log.ignore.includes(url))
                return;
            console.log(message);
        });
        next();
    }
}
exports.Log = Log;
Log.styles = {
    reset: "\x1b[0m",
    bold: "\u001b[1m",
};
Log.ignore = [];
Log.isColorless = false;
Log.colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
};
exports.logExpress = Log.logCalls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLEdBQUc7SUFpQk4sTUFBTSxDQUFDLE9BQU87UUFDcEIsTUFBTSxJQUFJLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakYsT0FBTyxJQUFJLElBQUksR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFFTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBYztRQUM1QyxJQUFJLE1BQU0sSUFBSSxHQUFHO1lBQUUsT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFHLElBQUksTUFBTSxJQUFJLEdBQUc7WUFBRSxPQUFPLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0csSUFBSSxNQUFNLElBQUksR0FBRztZQUFFLE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzRyxJQUFJLE1BQU0sSUFBSSxHQUFHO1lBQUUsT0FBTyxHQUFH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