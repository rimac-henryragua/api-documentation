import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { GetAllUsers } from '../application/get-all-users/GetAllUsers';

@Module({
  providers: [UserService, GetAllUsers],
  controllers: [UserController],
})
export class UserModule {}
