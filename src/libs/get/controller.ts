import { Injectable, Logger } from "@nestjs/common";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

@Injectable()
export class GetBillingController {
  constructor(private logger: Logger) {}

  async do(
    event: APIGatewayProxyEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> {
    this.logger.log('Get /billing api triggered')

    return {
      statusCode: 200,
      body: "Hello get"
    }
  }
}
