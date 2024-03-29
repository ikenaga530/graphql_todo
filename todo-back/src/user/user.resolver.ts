import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/createUser.input';
import { User } from '@prisma/client';
import { User as UserModel } from './models/user.model';
import { GetUserArgs } from './dto/getUser.args';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserModel, { nullable: true })
  @UseGuards(JwtAuthGuard)
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
    //ArgsTypeの場合は@Argsに引数を指定しない
    return await this.userService.getUser(getUserArgs.email);
  }

  @Mutation(() => UserModel)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return await this.userService.createUser(createUserInput);
  }
}
