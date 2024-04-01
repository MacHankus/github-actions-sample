import { Client } from '../entities/client.entity';
import { CreateClientDTO } from '../dtos/create.client.dto';

export abstract class ClientRepository {
  public abstract create(client: CreateClientDTO): Promise<Client>;
  public abstract getById(id: string): Promise<Client | null>;
  public abstract getAll(): Promise<Client[]>;
}
