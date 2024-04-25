import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Billing } from "../entities/billing.entity";

export default (): TypeOrmModuleOptions => ({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Billing],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export const dbEnvSecrets = {
  key: "/water-district-db/dev", // TODO: copy it from env vars
  dbEnvMapping:  {
    host: "DB_HOST",
    port: "DB_PORT",
    username: "DB_USERNAME",
    password: "DB_PASSWORD",
    name: "DB_DATABASE",
  }
}
