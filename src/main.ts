import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';  
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);  

  
  app.use('/public', express.static(join(__dirname, '..', 'public')));
  
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');  

  await app.listen(3000);
}
bootstrap();
