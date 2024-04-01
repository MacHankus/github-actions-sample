import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 9001,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [ClientModule],
      synchronize: false,
    }),
    ClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
