import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductModule } from './products/product.module';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('CONNECTION_STRING_TO_YOUR_MONGODB_INSTANCE'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
