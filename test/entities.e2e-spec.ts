import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('EntityController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/entities (CREATE)', () => {
    return request(app.getHttpServer())
      .post('/entities/create')
      .set('Accept', 'application/json')
      .send({
        genericField: 'huynhdn test',
      })
      .expect(201)
      .expect({
        id: 1,
        genericField: 'huynhdn test',
      });
  });

  it('/entities (GET)', () => {
    return request(app.getHttpServer()).get('/entities').expect(200).expect([]);
  });
});
