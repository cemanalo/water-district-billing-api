import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import { initializeApplicationContext } from "../libs/utils/application.context";
import { PostBillingsModule } from "../libs/functions/post/module";
import { dbEnvSecrets } from "../libs/configs/db-config";
import { CreateBillingController } from "../libs/functions/post/create.billing.controller";
import { INestApplicationContext } from "@nestjs/common";

let applicationContext: INestApplicationContext = null;

export const handler: Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> = async (event, context): Promise<APIGatewayProxyResult> => {
  console.log(event, context);
  const appContext = await initializeApplicationContext(
    applicationContext,
    PostBillingsModule,
    [dbEnvSecrets]
  );

  const controller = appContext.get(CreateBillingController);
  return await controller.do(event, context)
};
