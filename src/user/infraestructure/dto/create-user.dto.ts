import { UserCreatorRequest } from '../../application/user-creator/UserCreatorRequest';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto implements Omit<UserCreatorRequest, 'id'> {
  @ApiProperty({ description: 'The name of the user', example: 'John Doe' })
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@gmail.com',
  })
  email: string;
}
