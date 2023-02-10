import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Patch,
    Delete,
    UsePipes,
    ValidationPipe,
    } from '@nestjs/common';
    import { CreateUserDto } from 'src/users/dto/users.dtos';
    import { UsersService } from 'src/users/services/users/users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
  
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  
  @Get('id/:id')
  findUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUsersById(id);
  }
  
  @Post('create')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
  @Delete('delete')
  deleteUsers(@Body('id',ParseIntPipe) id: number){
    return this.userService.deleteUsers(id);
  }
  @Patch('update/:id')
  @UsePipes(ValidationPipe)
  updateUsers(@Param('id', ParseIntPipe)id :number,@Body()createUserDto: CreateUserDto){
    return this.userService.updateUsers(id,createUserDto)
  }
  
  
}
