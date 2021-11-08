import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductModule } from './products/product.module';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(process.env.DB_CONNECTION_STRING),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
