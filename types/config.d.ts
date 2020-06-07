declare module "config" {
  interface IConfig {
    db: string;
  }
  const config: IConfig;
  export = config;
}
