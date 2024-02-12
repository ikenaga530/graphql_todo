import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //CORS
  app.useGlobalPipes(new ValidationPipe()); //validation有効化するためのパイプ
  await app.listen(3000);
}
bootstrap();
