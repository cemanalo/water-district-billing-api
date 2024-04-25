import { INestApplicationContext } from "@nestjs/common";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import { GetBillingsModule } from "../libs/functions/get/module";
import { GetBillingController } from "../libs/functions/get/controller";
import { dbEnvSecrets } from "../libs/configs/db-config";
import { initializeApplicationContext } from "../libs/utils/application.context";

let applicationContext: INestApplicationContext = null;

export const handler: Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> = async (event, context): Promise<APIGatewayProxyResult> => {
  const appContext = await initializeApplicationContext(
    applicationContext,
    GetBillingsModule,
    [dbEnvSecrets]
  );
  const controller = appContext.get(GetBillingController);

  return await controller.do(event, context);
};
