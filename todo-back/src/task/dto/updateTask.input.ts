import { Field, InputType, Int } from '@nestjs/graphql';
import { Status } from '../models/task.model';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateTaskInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  @IsNotEmpty() //空文字列は許可しない
  @IsOptional() //未指定の場合はエラーにしない
  name?: string;

  @Field({ nullable: true })
  @IsDateString()
  @IsOptional()
  dueDate?: string;

  @Field({ nullable: true })
  @IsEnum(Status)
  @IsOptional()
  status?: Status;

  @Field({ nullable: true })
  description?: string;
}
