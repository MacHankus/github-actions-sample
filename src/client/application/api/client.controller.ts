import { Controller, Get } from '@nestjs/common';
import { ClientResponseDTO } from './dtos/client.response.dto';
import { ClientService } from 'src/client/domain/ports/client.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  @Get()
  async getAll(): Promise<ClientResponseDTO[]> {
    const clients = await this.clientService.getAll();
    const mappedClients = clients.map((element) =>
      ClientResponseDTO.fromEntity(element),
    );
    return mappedClients;
  }
}
