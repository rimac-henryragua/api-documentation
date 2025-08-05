import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCreator } from '../application/user-creator/UserCreator';
import { UserRepository } from '../domain/UserRepository';
import { TypeOrmUserRepository } from './persistence/TypeOrmUserRepository';
import { TypeOrmUser } from './persistence/typeorm/TypeOrmUser';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { GetAllUsers } from '../application/get-all-users/GetAllUsers';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([TypeOrmUser])],
  providers: [
    UserService,
    GetAllUsers,
    UserCreator,
    {
      provide: UserRepository,
      useClass: TypeOrmUserRepository,
    },
  ],
})
export class UserModule {}
