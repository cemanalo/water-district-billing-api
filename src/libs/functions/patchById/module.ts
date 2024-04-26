import { Logger, Module } from "@nestjs/common";
import { PatchBillingController } from "./controller";
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
  providers: [Logger, PatchBillingController, BillingService],
})
export class PatchBillingByIdModule {}
