import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export const PRODUCT_DB = 'product'

@Schema({
  collection: PRODUCT_DB,
  timestamps: true,
  toJSON: { virtuals: true },
  collation: { locale: 'vi' },
  validateBeforeSave: true,
})
export class Product {
  @Prop({
    required: true,
  })
  name: string

  @Prop({
    required: true,
  })
  congdung: string

  @Prop({
    required: true,
  })
  doituong: string

  @Prop({
    required: true,
  })
  cachdung: string

  @Prop({
    required: true,
  })
  thanhphan: string

  @Prop({
    required: true,
  })
  imageUrls: string

  @Prop({
    required: true,
  })
  giaca: number
}

export const ProductSchema = SchemaFactory.createForClass(Product)

export interface ProductDocument extends Product, Document {}
