import { Inject, Injectable } from '@nestjs/common';
import { BadRequest } from 'src/error/badRequest.exception';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto) {
    throw new BadRequest('Usuário já cadastrado!');
  }

  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
