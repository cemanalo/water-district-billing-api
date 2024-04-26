import { INestApplicationContext } from "@nestjs/common";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import { dbEnvSecrets } from "../libs/configs/db-config";
import { initializeApplicationContext } from "../libs/utils/application.context";
import { DeleteBillingByIdController } from "../libs/functions/delete/controller";
import { DeleteBillingByIdModule } from "../libs/functions/delete/module";

let applicationContext: INestApplicationContext = null;

export const handler: Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> = async (event, context): Promise<APIGatewayProxyResult> => {
  const appContext = await initializeApplicationContext(
    applicationContext,
    DeleteBillingByIdModule,
    [dbEnvSecrets]
  );
  const controller = appContext.get(DeleteBillingByIdController);

  return await controller.do(event, context);
};
