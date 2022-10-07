import { Injectable } from '@nestjs/common';
import { User } from '../types';
import { SerializedUser } from '../types';

@Injectable()
export class UserService {
  private Users: User[] = [
    {
      email: 'priyam@gmail.com',
      password: 'password1',
    },
    {
      email: 'hehehe@gmail.com',
      password: 'password2',
    },
    {
      email: 'adfasf@gmail.com',
      password: 'passwor3',
    },
    {
      email: 'nonnonon@gmail.com',
      password: 'password4',
    },
    {
      email: 'eyeyeye@gmail.com',
      password: 'password5',
    },
  ];

  getAllUsers() {
    return this.Users.map((user) => new SerializedUser(user));
  }

  getUserByEmail(email: string) {
    return this.Users.find((user) => user.email == email);
  }
}
