import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType("Student")
export class StudentType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
