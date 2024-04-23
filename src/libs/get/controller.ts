import { Injectable, Logger } from "@nestjs/common";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { BillingService } from "./billing.service";

@Injectable()
export class GetBillingController {
  constructor(private logger: Logger, private billingService: BillingService) {}

  async do(
    event: APIGatewayProxyEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> {
    this.logger.log('Get /billing api triggered')
    const billings = await this.billingService.findAll();
    return {
      statusCode: 200,
      body: JSON.stringify(billings)
    }
  }
}
