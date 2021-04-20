"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logExpressCalls = void 0;
class Log {
    static getTime() {
        const time = new Date()
            .toISOString()
            .replace('T', ' ')
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
    static logCalls(request, response, next) {
        const startTime = new Date().valueOf();
        response.on('finish', () => {
            var _a, _b;
            const endTime = new Date().valueOf() - startTime;
            const status = Log.getColoredStatus(response.statusCode);
            const url = (_a = response === null || response === void 0 ? void 0 : response.req) === null || _a === void 0 ? void 0 : _a.originalUrl;
            const method = (_b = response === null || response === void 0 ? void 0 : response.req) === null || _b === void 0 ? void 0 : _b.method;
            const timestamp = Log.getTime();
            const message = `${Log.styles.bold}${timestamp} ${method}: ${url} ${status} ${endTime}ms${Log.styles.reset}`;
            console.log(message);
        });
        next();
    }
}
Log.styles = {
    reset: '\x1b[0m',
    bold: '\u001b[1m'
};
Log.colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    white: "\x1b[37m"
};
exports.logExpressCalls = Log.logCalls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLEdBQUc7SUFlRyxNQUFNLENBQUMsT0FBTztRQUNsQixNQUFNLElBQUksR0FBVyxJQUFJLElBQUksRUFBRTthQUMxQixXQUFXLEVBQUU7YUFDYixPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQzthQUNqQixTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxJQUFJLEdBQUcsQ0FBQztJQUN2QixDQUFDO0lBRU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQWM7UUFDMUMsSUFBSSxNQUFNLElBQUksR0FBRztZQUFFLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxRSxJQUFJLE1BQU0sSUFBSSxHQUFHO1lBQUUsT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdFLElBQUksTUFBTSxJQUFJLEdBQUc7WUFBRSxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0UsSUFBSSxNQUFNLElBQUksR0FBRztZQUFFLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1RSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxJQUFTO1FBQ3pELE1BQU0sU0FBUyxHQUFXLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFL0MsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBUyxFQUFFOztZQUM3QixNQUFNLE9BQU8sR0FBVyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQztZQUN6RCxNQUFNLE1BQU0sR0FBVyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sR0FBRyxHQUFXLE1BQUEsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEdBQUcsMENBQUUsV0FBcUIsQ0FBQztZQUV6RCxNQUFNLE1BQU0sR0FBVyxNQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxHQUFHLDBDQUFFLE1BQWdCLENBQUM7WUFDdkQsTUFBTSxTQUFTLEdBQVcsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hDLE1BQU0sT0FBTyxHQUFXLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsU0FBUyxJQUFJLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxJQUFJLE9BQU8sS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXJILE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUM7O0FBOUNjLFVBQU0sR0FBRztJQUNwQixLQUFLLEVBQUUsU0FBUztJQUNoQixJQUFJLEVBQUUsV0FBVztDQUNwQixDQUFBO0FBRWMsVUFBTSxHQUFHO0lBQ3BCLEdBQUcsRUFBRSxVQUFVO0lBQ2YsS0FBSyxFQUFFLFVBQVU7SUFDakIsTUFBTSxFQUFFLFVBQVU7SUFDbEIsSUFBSSxFQUFFLFVBQVU7SUFDaEIsS0FBSyxFQUFFLFVBQVU7Q0FDcEIsQ0FBQTtBQXNDUSxRQUFBLGVBQWUsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDIn0=