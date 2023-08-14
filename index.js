"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIgnorePath = exports.logExpress = void 0;
class Log {
    static getTime() {
        const time = new Date()
            .toISOString()
            .replace("T", " ")
            .substring(0, 19);
        return `[${time}]`;
    }
    static getColoredStatus(status) {
        if (status >= 500)
            return `${Log.colors.red}${status}${Log.styles.reset}`;
        if (status >= 400)
            return `${Log.colors.yellow}${status}${Log.styles.reset}`;
        if (status >= 300)
            return `${Log.colors.cyan}${status}${Log.styles.reset}`;
        if (status >= 200)
            return `${Log.colors.green}${status}${Log.styles.reset}`;
        return `${status}`;
    }
    static logIgnorePath(ignorePath) {
        Log.ignorePath.push(ignorePath);
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
            const message = `${Log.styles.bold}${timestamp} ${method}: ${url} ${status} ${endTime}ms${Log.styles.reset}`;
            if (Log.ignorePath.includes(url))
                return;
            console.log(message);
        });
        next();
    }
}
Log.styles = {
    reset: "\x1b[0m",
    bold: "\u001b[1m",
};
Log.ignorePath = [];
Log.colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
};
exports.logExpress = Log.logCalls;
exports.logIgnorePath = Log.logIgnorePath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLEdBQUc7SUFnQkMsTUFBTSxDQUFDLE9BQU87UUFDcEIsTUFBTSxJQUFJLEdBQVcsSUFBSSxJQUFJLEVBQUU7YUFDNUIsV0FBVyxFQUFFO2FBQ2IsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDakIsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwQixPQUFPLElBQUksSUFBSSxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFjO1FBQzVDLElBQUksTUFBTSxJQUFJLEdBQUc7WUFBRSxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUUsSUFBSSxNQUFNLElBQUksR0FBRztZQUNmLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1RCxJQUFJLE1BQU0sSUFBSSxHQUFHO1lBQUUsT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNFLElBQUksTUFBTSxJQUFJLEdBQUc7WUFBRSxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFNUUsT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQWtCO1FBQzVDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsSUFBUztRQUMzRCxNQUFNLFNBQVMsR0FBVyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRS9DLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQVMsRUFBRTs7WUFDL0IsTUFBTSxPQUFPLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUM7WUFDekQsTUFBTSxNQUFNLEdBQVcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRSxNQUFNLEdBQUcsR0FBVyxNQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxHQUFHLDBDQUFFLFdBQXFCLENBQUM7WUFFekQsTUFBTSxNQUFNLEdBQVcsTUFBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsR0FBRywwQ0FBRSxNQUFnQixDQUFDO1lBQ3ZELE1BQU0sU0FBUyxHQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QyxNQUFNLE9BQU8sR0FBVyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLFNBQVMsSUFBSSxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sSUFBSSxPQUFPLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVySCxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPO1lBRXpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUM7O0FBdkRjLFVBQU0sR0FBRztJQUN0QixLQUFLLEVBQUUsU0FBUztJQUNoQixJQUFJLEVBQUUsV0FBVztDQUNsQixDQUFDO0FBRWEsY0FBVSxHQUFhLEVBQUUsQ0FBQztBQUUxQixVQUFNLEdBQUc7SUFDdEIsR0FBRyxFQUFFLFVBQVU7SUFDZixLQUFLLEVBQUUsVUFBVTtJQUNqQixNQUFNLEVBQUUsVUFBVTtJQUNsQixJQUFJLEVBQUUsVUFBVTtJQUNoQixLQUFLLEVBQUUsVUFBVTtDQUNsQixDQUFDO0FBNkNTLFFBQUEsVUFBVSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDMUIsUUFBQSxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyJ9