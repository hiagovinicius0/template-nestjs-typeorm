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

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.searchEmail(createUserDto.email);
    if (typeof findUser !== 'undefined') throw new BadRequest('Usuário criado');
    const user = this.usersRepository.create({
      name: createUserDto.name,
      email: createUserDto.email,
    });
    await this.usersRepository.save(user);
    return user;
  }

  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne(id);
  }

  async searchEmail(email: string) {
    return await this.usersRepository.findOne({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
