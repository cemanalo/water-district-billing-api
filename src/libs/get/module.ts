import { Logger, Module } from "@nestjs/common";
import { GetBillingController } from "./controller";

@Module({
  providers: [
    Logger,
    GetBillingController
  ]
})
export class GetBillingModule {}