import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreator } from 'src/user/application/user-creator/UserCreator';
import { GetAllUsers } from '../application/get-all-users/GetAllUsers';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';

@Controller('user')
export class UserController {
  constructor(
    private readonly userCreator: UserCreator,
    private readonly getAllUsers: GetAllUsers,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userCreator.execute({
      ...createUserDto,
      id: uuidv4(),
    });
  }

  @Get()
  findAll() {
    return this.getAllUsers.execute();
  }
}
