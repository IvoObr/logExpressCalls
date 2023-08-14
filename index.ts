class Log {
  private static styles = {
    reset: "\x1b[0m",
    bold: "\u001b[1m",
  };

  private static ignorePath: string[] = [];

  private static colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  };

  private static getTime(): string {
    const time: string = new Date()
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);
    return `[${time}]`;
  }

  private static getColoredStatus(status: number): string {
    if (status >= 500) return `${Log.colors.red}${status}${Log.styles.reset}`;
    if (status >= 400)
      return `${Log.colors.yellow}${status}${Log.styles.reset}`;
    if (status >= 300) return `${Log.colors.cyan}${status}${Log.styles.reset}`;
    if (status >= 200) return `${Log.colors.green}${status}${Log.styles.reset}`;

    return `${status}`;
  }

  public static logIgnorePath(ignorePath: string): void {
    Log.ignorePath.push(ignorePath)
  }

  public static logCalls(request: any, response: any, next: any): void {
    const startTime: number = new Date().valueOf();

    response.on("finish", (): void => {
      const endTime: number = new Date().valueOf() - startTime;
      const status: string = Log.getColoredStatus(response.statusCode);
      const url: string = response?.req?.originalUrl as string;

      const method: string = response?.req?.method as string;
      const timestamp: string = Log.getTime();
      const message: string = `${Log.styles.bold}${timestamp} ${method}: ${url} ${status} ${endTime}ms${Log.styles.reset}`;

      if (Log.ignorePath.includes(url)) return;

      console.log(message);
    });

    next();
  }
}

export const logExpress = Log.logCalls;
export const logIgnorePath = Log.logIgnorePath;
