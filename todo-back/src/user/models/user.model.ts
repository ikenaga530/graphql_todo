import { Field, HideField, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;
  name: string;
  email: string;
  @HideField()
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
