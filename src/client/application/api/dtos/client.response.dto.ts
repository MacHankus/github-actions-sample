import { Client } from 'src/client/domain/entities/client.entity';

export class ClientResponseDTO {
  id: string;
  name: string;
  surname: string;
  static fromEntity(client: Client): ClientResponseDTO {
    const dto = new ClientResponseDTO();
    dto.id = client.id;
    dto.name = client.name;
    dto.surname = client.surname;
    return dto;
  }
}
