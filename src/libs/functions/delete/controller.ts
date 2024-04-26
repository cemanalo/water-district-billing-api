import { Injectable, Logger } from "@nestjs/common";
import { BillingService } from "../../services/billing.service";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { validateNumber } from "../../utils/validation.util";

@Injectable()
export class DeleteBillingByIdController {
  constructor(private logger: Logger, private billingService: BillingService) {}

  async do(
    event: APIGatewayProxyEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> {
    this.logger.log("GetBillingByIdController triggered");
    this.logger.log(JSON.stringify(event));

    const id = event.pathParameters.id;
    validateNumber(id)

    const billing = await this.billingService.remove(Number(id));

    return {
      statusCode: 200,
      body: JSON.stringify(billing),
    };
  }
}
