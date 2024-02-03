import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, isNotEmpty } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @IsNotEmpty()
  name: string;

  @IsDateString()
  dueDate: string;

  @Field({ nullable: true })
  description?: string;
}
