import { Logger, Module } from "@nestjs/common";
import { GetBillingController } from "./controller";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BillingService } from "../../services/billing.service";
import dbConfig from "../../configs/db-config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: dbConfig,
    }),
  ],
  providers: [Logger, GetBillingController, BillingService],
})
export class GetBillingsModule {}
