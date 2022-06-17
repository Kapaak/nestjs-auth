import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports:[UsersService]//so that its visible outside this module
})
export class UsersModule {}
