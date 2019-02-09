import { Controller, Get, Post, Body, UsePipes, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user-dto';
import { UserRO } from './user-ro';
import { ValidationPipe } from 'src/shared/validation.pipe';
import { AuthGuard } from 'src/shared/auth.guard';
import { UserEntity } from './user-entity';
import { User } from './user.decorator';

@Controller('auth')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  @Get('users')
  @UseGuards(new AuthGuard())
  async getAll(@User('username') user: UserEntity): Promise<UserRO[]> {
    return this.usersService.getAll();
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body()data: UserDto) {
    return this.usersService.login(data);
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  register(@Body()data: UserDto) {
    return this.usersService.register(data);
  }
}
