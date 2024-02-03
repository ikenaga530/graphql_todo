import { ArgsType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ArgsType()
export class GetUserArgs {
  @IsEmail()
  email: string;
}
