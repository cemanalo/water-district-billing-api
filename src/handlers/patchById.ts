import { INestApplicationContext } from "@nestjs/common";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import { dbEnvSecrets } from "../libs/configs/db-config";
import { initializeApplicationContext } from "../libs/utils/application.context";
import { GetBillingByIdModule } from "../libs/functions/getById/module";
import { GetBillingByIdController } from "../libs/functions/getById/controller";
import { PatchBillingByIdModule } from "../libs/functions/patchById/module";
import { PatchBillingController } from "../libs/functions/patchById/controller";

let applicationContext: INestApplicationContext = null;

export const handler: Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> = async (event, context): Promise<APIGatewayProxyResult> => {
  const appContext = await initializeApplicationContext(
    applicationContext,
    PatchBillingByIdModule,
    [dbEnvSecrets]
  );
  const controller = appContext.get(PatchBillingController);

  return await controller.do(event, context);
};
