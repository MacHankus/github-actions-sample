import { Injectable } from '@nestjs/common';
import { Client } from '../entities/client.entity';
import { ClientRepository } from './client.repository';
import { UUID } from 'crypto';
import { CreateClientDTO } from '../dtos/create.client.dto';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async create(clientDTO: CreateClientDTO): Promise<Client> {
    return this.clientRepository.create(clientDTO);
  }

  async getAll(): Promise<Client[]> {
    return this.clientRepository.getAll();
  }

  async get(id: UUID): Promise<Client | null> {
    return this.clientRepository.getById(id);
  }
}
