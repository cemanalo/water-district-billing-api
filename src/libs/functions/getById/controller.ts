import { Injectable, Logger } from "@nestjs/common";
import { BillingService } from "../../services/billing.service";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

@Injectable()
export class GetBillingByIdController {
  constructor(private logger: Logger, private billingService: BillingService) {}

  async do(
    event: APIGatewayProxyEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> {
    this.logger.log("GetBillingByIdController triggered");
    this.logger.log(JSON.stringify(event));

    const id = event.pathParameters.id;
    this.validate(id);

    const billing = await this.billingService.findOneById(Number(id));

    return {
      statusCode: 200,
      body: JSON.stringify(billing),
    };
  }

  validate(id: string) {
    if (!id) {
      throw new Error("Id is required");
    }

    if (!Number.isInteger(Number(id))) {
      throw new Error("Id must be a number");
    }
  }
}
