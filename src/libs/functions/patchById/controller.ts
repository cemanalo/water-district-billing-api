import { Injectable, Logger } from "@nestjs/common";
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { Billing } from "../../entities/billing.entity";
import { validate as classValidator } from "class-validator";
import { plainToInstance } from "../../utils/class.transformer";
import { validateNumber } from "../../utils/validation.util";
import { BillingService } from "../../services/billing.service";

@Injectable()
export class PatchBillingController {
  constructor(private logger: Logger, private billingService: BillingService) {}

  async do(
    event: APIGatewayProxyEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> {
    try {
      const data = JSON.parse(event.body);
      this.logger.log("Creating billing");

      const id = event.pathParameters.id
      validateNumber(id)

      const billing = plainToInstance(Billing, data)
      await this.validate(billing);

      const result = await this.billingService.patchById(Number(id), billing)

      return {
        statusCode: 200,
        body: JSON.stringify(result),
      };
    } catch (err) {
      const error = err as Error;
      this.logger.error(error);
      return {
        statusCode: 500,
        body: error.message,
      };
    }
  }

  async validate(data: Billing) {
    this.logger.log("Validating data");
    console.log(data)

    const validationErrors = await classValidator(data, {
      skipMissingProperties: true
    });
    if (validationErrors.length > 0) {
      this.logger.error(validationErrors)
      throw new Error('Invalid request body')
    }
  }
}
