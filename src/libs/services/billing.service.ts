import { Injectable } from "@nestjs/common";
import { Billing } from "../entities/billing.entity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class BillingService {
  private billingRepository: Repository<Billing>;

  constructor(private dataSource: DataSource) {
    this.billingRepository = this.dataSource.getRepository(Billing);
  }

  async create(billing: Billing): Promise<Billing> {
    return this.billingRepository.save(billing);
  }

  async findAll(): Promise<Billing[]> {
    return this.billingRepository.find();
  }

  async findOne(id: number): Promise<Billing> {
    return this.billingRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.billingRepository.delete(id);
  }

  async findByAccountId(accountId: string): Promise<Billing[]> {
    return this.billingRepository.findBy({ fk_account_id: accountId });
  }
}
