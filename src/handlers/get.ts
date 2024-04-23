import { INestApplicationContext, Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventV2,
  APIGatewayProxyResult,
  APIGatewayProxyResultV2,
  Context,
  Handler,
} from "aws-lambda";
import { GetBillingModule } from "../libs/get/module";
import { GetBillingController } from "../libs/get/controller";
import { SecretClientService } from "../libs/services/secret.client.service";

let applicationContext: INestApplicationContext = null;

const dbEnvMapping = {
  host: "DB_HOST",
  port: "DB_PORT",
  username: "DB_USERNAME",
  password: "DB_PASSWORD",
  name: "DB_DATABASE",
};

const getApplicationContext = async (): Promise<INestApplicationContext> => {
  if (applicationContext) return applicationContext;
  const secretClient = new SecretClientService();
  const dbCredentials = await secretClient.getValue("/water-district-db/dev");
  secretClient.mapToEnv(dbCredentials, dbEnvMapping);

  applicationContext = await NestFactory.createApplicationContext(
    GetBillingModule
  );

  return applicationContext;
};

export const handler: Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> = async (event, context): Promise<APIGatewayProxyResult> => {
  const appContext = await getApplicationContext();
  const controller = appContext.get(GetBillingController);

  return await controller.do(event, context);
};
