import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { SerializedUser } from '../types';

@Controller('users')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':email')
  getUsersByEmail(@Param('email') email: string) {
    const user = this.userService.getUserByEmail(email);
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);

    return new SerializedUser(user);
  }
}
