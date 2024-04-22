import { INestApplicationContext } from "@nestjs/common";
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

let applicationContext: INestApplicationContext = null;

const getApplicationContext = async (): Promise<INestApplicationContext> => {
  if (applicationContext) return applicationContext;

  applicationContext =
    await NestFactory.createApplicationContext(GetBillingModule);

  return applicationContext;
};

export const handler: Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> = async (event, context): Promise<APIGatewayProxyResult> => {
  const appContext = await getApplicationContext()
  const controller = appContext.get(GetBillingController)

  return await controller.do(event, context)
};

