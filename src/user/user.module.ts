import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
  ],
})
export class UserModule {}
