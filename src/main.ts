import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from "@nestjs/common"
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger("bootstrap");
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  const Port = 3000;
  await app.listen(Port);
  logger.log(`Application listening on port ${Port}`)
}
bootstrap();
