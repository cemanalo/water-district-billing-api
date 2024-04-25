import { Logger, Module } from "@nestjs/common";
import dbConfig from "../../configs/db-config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { CreateBillingUseCase } from "./create.billing.usecase";
import { CreateBillingController } from "./create.billing.controller";
import { BillingService } from "../../services/billing.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: dbConfig,
    }),
  ],
  providers: [
    Logger,
    CreateBillingController,
    CreateBillingUseCase,
    BillingService,
  ],
})
export class PostBillingsModule {}
