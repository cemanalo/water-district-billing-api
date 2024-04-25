import { IsDate, IsDateString, IsEmpty, IsISO8601, IsNumber, IsNumberString, IsOptional, IsRFC3339, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'billings'
})
export class Billing {

  @PrimaryGeneratedColumn()
  @IsOptional()
  @IsNumber()
  id: number

  @Column()
  @IsNumberString()
  fk_account_id: string

  @Column()
  @IsString()
   billing_notice: string

   @Column()
   @IsDateString()
   covered_from: string

   @Column()
   @IsDateString()
   covered_to: string

   @Column()
   @IsString()
   connection_type: string

   @Column()
   @IsString()
   meter_number: string

   @Column()
   @IsNumber()
   previous_reading: number

   @Column()
   @IsNumber()
   present_reading: number

   @Column()
   @IsNumber()
   consumption: number

   @Column()
   @IsNumber()
   current_month_bill: number

   @Column()
   @IsNumber()
   arrears: number

   @Column()
   @IsNumber()
   total_amount_due: number

   @Column()
   @IsDateString()
   due_date: string

   @Column()
   @IsOptional()
   @IsString()
   disconnection_date?: string
}
