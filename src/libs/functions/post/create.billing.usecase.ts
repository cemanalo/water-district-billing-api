import { Injectable } from "@nestjs/common";
import { UseCase } from "../../commons/usecase";
import { Billing } from "../../entities/billing.entity";
import { BillingService } from "../../services/billing.service";

type Input = Billing
type Output = {
  id: number
}

@Injectable()
export class CreateBillingUseCase extends UseCase<Input, Promise<Output>> {
  constructor(private billingService: BillingService) {
    super()
  }

  async execute(input: Input): Promise<Output> {
    const { id } = await this.billingService.create(input)
    return { id }
  }
}