import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Student } from './Student.entity';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './Student.service';
import { StudentType } from './Student.type';

@Resolver((of) => StudentType)
export class StudentReolver {
  constructor(private StudentService: StudentService) {}
  @Query((returns) => StudentType)
  Student(@Args('id') id: string) {
    return this.StudentService.getStudent(id);
  }

  @Mutation((returns) => StudentType)
  createLession(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.StudentService.createStudent(createStudentInput);
  }

  @Query(returns => [StudentType])
  async getStudents(): Promise<Student[]> {
    return this.StudentService.getStudents();
  }
}
