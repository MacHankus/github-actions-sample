import { Repository } from 'typeorm';
import { ClientModel } from './client.model';
import { Inject, Injectable } from '@nestjs/common';
import { ClientRepository } from 'src/client/domain/ports/client.repository';
import { CreateClientDTO } from 'src/client/domain/dtos/create.client.dto';
import { Client } from 'src/client/domain/entities/client.entity';

@Injectable()
export class ClientPostgresRepository extends ClientRepository {
  constructor(
    @Inject(Repository<ClientModel>)
    private readonly repository: Repository<ClientModel>,
  ) {
    super();
  }
  async create(client: CreateClientDTO): Promise<Client> {
    const newClient = new Client(client.name, client.surname);
    const newClientModel = new ClientModel();
    newClientModel.id = newClient.id;
    newClientModel.name = newClient.name;
    newClientModel.surname = newClient.surname;
    await this.repository.save(newClientModel);
    return newClient;
  }
  async getById(id: string): Promise<Client | null> {
    const clientModel = await this.repository.findOneBy({ id });
    if (!clientModel) {
      return null;
    }
    return new Client(clientModel.name, clientModel.surname, clientModel.id);
  }
  async getAll(): Promise<Client[]> {
    const dbClients = await this.repository.find();

    const clients = dbClients.map((element) => {
      return new Client(element.name, element.surname, element.id);
    });

    return clients;
  }
}
