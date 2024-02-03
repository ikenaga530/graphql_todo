import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum Status {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

registerEnumType(Status, {
  name: 'Status',
});

@ObjectType()
export class Task {
  @Field(() => Int)
  id: number;
  name: string;
  dueDate: string;

  @Field(() => Status)
  status: Status;

  @Field({ nullable: true })
  description?: string;
}
