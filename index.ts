export class Log {
  private static styles = {
    reset: "\x1b[0m",
    bold: "\u001b[1m",
  };

  private static ignore: string[] = [];
  private static isColorless: boolean = false;

  private static colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  };

  private static getTime(): string {
    const time: string = new Date().toISOString().replace("T", " ").substring(0, 19);
    return `[${time}]`;
  }

  private static getColoredStatus(status: number): string {
    if (status >= 500) return Log.isColorless ? `${status}` : `${Log.colors.red}${status}${Log.styles.reset}`;
    if (status >= 400) return Log.isColorless ? `${status}` : `${Log.colors.yellow}${status}${Log.styles.reset}`;
    if (status >= 300) return Log.isColorless ? `${status}` : `${Log.colors.cyan}${status}${Log.styles.reset}`;
    if (status >= 200) return Log.isColorless ? `${status}` : `${Log.colors.green}${status}${Log.styles.reset}`;

    return `${status}`;
  }

  public static ignorePath(ignorePath: string): void {
    Log.ignore.push(ignorePath);
  }

  public static useColorless(): void {
    Log.isColorless = true;
  }

  public static logCalls(request: any, response: any, next: any): void {
    const startTime: number = new Date().valueOf();

    response.on("finish", (): void => {
      const endTime: number = new Date().valueOf() - startTime;
      const status: string = Log.getColoredStatus(response.statusCode);
      const url: string = response?.req?.originalUrl as string;

      const method: string = response?.req?.method as string;
      const timestamp: string = Log.getTime();
      let message: string;

      if (Log.isColorless) {
        message = `${timestamp} ${method}: ${url} ${status} ${endTime}ms`;
      } else {
        message = `${Log.styles.bold}${timestamp} ${method}: ${url} ${status} ${endTime}ms${Log.styles.reset}`;
      }

      if (Log.ignore.includes(url)) return;

      console.log(message);
    });

    next();
  }
}

export const logExpress = Log.logCalls;
