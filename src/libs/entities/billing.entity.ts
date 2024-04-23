import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'billings'
})
export class Billing {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  fk_account_id: string

  @Column()
   billing_notice: string

   @Column()
   covered_from: string

   @Column()
   covered_to: string

   @Column()
   connection_type: string

   @Column()
   meter_number: string

   @Column()
   previous_reading: number

   @Column()
   present_reading: number

   @Column()
   consumption: number

   @Column()
   current_month_bill: number

   @Column()
   arrears: number

   @Column()
   total_amount_due: number

   @Column()
   due_date: string

   @Column()
   disconnection_date: string
}
