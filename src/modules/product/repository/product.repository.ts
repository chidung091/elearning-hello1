import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { BaseRepository } from '../../../common/repository/base.repository'
import { ProductDocument, PRODUCT_DB } from '../entity/product.entity'

@Injectable()
export class ProductRepository extends BaseRepository<ProductDocument> {
  constructor(
    @InjectModel(PRODUCT_DB)
    private readonly productModel: Model<ProductDocument>,
  ) {
    super(productModel)
  }
}
