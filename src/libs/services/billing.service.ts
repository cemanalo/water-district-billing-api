import { Injectable } from "@nestjs/common";
import { Billing } from "../entities/billing.entity";
import { DataSource, DeleteResult, Repository, UpdateResult } from "typeorm";

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

  async findOneById(id: number): Promise<Billing> {
    return this.billingRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.billingRepository.delete(id);
  }

  async findByAccountId(accountId: string): Promise<Billing[]> {
    return this.billingRepository.findBy({ fk_account_id: accountId });
  }

  async patchById(id: number, billing: Billing): Promise<UpdateResult> {
    return this.billingRepository.update({ id }, billing);
  }
}
