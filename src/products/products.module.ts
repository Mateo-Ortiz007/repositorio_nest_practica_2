import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaProductService } from '../prisma/prisma.product.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaProductService],
})
export class ProductsModule {}
