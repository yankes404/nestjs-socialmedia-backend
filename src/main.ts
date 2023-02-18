import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import mongoose from 'mongoose';

export const mongoConnect = () => {
  const connect = mongoose.connect("mongodb://127.0.0.1:27017/social-media", (error => {if(error) console.log(error)}));
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  mongoConnect();

  await app.listen(7000);
}
bootstrap();
