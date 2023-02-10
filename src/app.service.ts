import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'TEsT';
  }

  getHello2(): string {
    return 'TEsT2';
  }
}
