import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  // for global level middleware
  await app.use(Logger);
  // to handle exception at global level
  // await app.useGlobalFilters(exception-handler)
}
bootstrap();
