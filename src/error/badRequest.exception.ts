import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';

export class BadRequest extends BadRequestException {
  constructor(message: string) {
    super(message);
  }
}
