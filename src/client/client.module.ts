import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './application/api/client.controller';
import { ClientService } from './domain/ports/client.service';
import { ClientModel } from './application/repositories/client/client.model';
import { ClientPostgresRepository } from './application/repositories/client/client.repository';
import { ClientRepository } from './domain/ports/client.repository';
import { Repository } from 'typeorm/repository/Repository';
@Module({
  imports: [TypeOrmModule.forFeature([ClientModel])],
  controllers: [ClientController],
  providers: [
    {
      provide: Repository<ClientModel>,
      useClass: Repository<ClientModel>,
    },
    {
      provide: ClientRepository,
      useClass: ClientPostgresRepository,
    },
    ClientService,
  ],
  exports: [ClientService],
})
export class ClientModule {}
