import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntitiesModule } from './entities/entities.module';

const CONFIG_MYSQL = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: [],
  synchronize: true,
};

const CONFIG_SQL_LITE: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'travel_db',
  name: process.env.DATABASE_NAME,
  // dropSchema: true,
  logging: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

@Module({
  imports: [TypeOrmModule.forRoot(CONFIG_SQL_LITE), EntitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
