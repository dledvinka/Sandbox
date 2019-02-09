import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user-dto';
import { UserRO } from './user-ro';

@Controller('auth')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  @Get('users')
  async getAll(): Promise<UserRO[]> {
    return this.usersService.getAll();
  }

  @Post('login')
  //@UsePipes(new ValidationPipe())
  login(@Body()data: UserDto) {
    return this.usersService.login(data);
  }

  @Post('register')
  //@UsePipes(new ValidationPipe())
  register(@Body()data: UserDto) {
    return this.usersService.register(data);
  }
}
