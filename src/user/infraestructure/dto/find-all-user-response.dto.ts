import { ApiProperty } from '@nestjs/swagger';

export class FindAllUserResponseDto {
  @ApiProperty({
    description: 'The ID of the user',
    example: '0001',
  })
  id: string;

  @ApiProperty({ description: 'The name of the user', example: 'John Doe' })
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@gmail.com',
  })
  email: string;
}
