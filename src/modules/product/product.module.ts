import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductSchema, PRODUCT_DB } from './entity/product.entity'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'
import { ProductRepository } from './repository/product.repository'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PRODUCT_DB, schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
