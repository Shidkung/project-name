import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeor';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { Observable } from 'rxjs';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
      ) {}
          
      createUser(createUserDto: CreateUserDto) {
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
      }
          
      findUsersById(id: number) {
        return this.userRepository.findOne({where:{id:id}});
        
      }
      getUsers(){
        return this.userRepository.find();
      }
      deleteUsers(id: number){
        return this.userRepository.delete(id)
      }
      updateUsers(id:number,createUserDto:CreateUserDto){
        return this.userRepository.update(id,createUserDto);
      }
}
