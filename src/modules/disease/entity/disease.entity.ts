import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export const DISEASE_DB = 'disease'

@Schema({
  collection: DISEASE_DB,
  timestamps: true,
  toJSON: { virtuals: true },
  collation: { locale: 'vi' },
  validateBeforeSave: true,
})
export class Disease {
  @Prop({
    required: true,
  })
  name: string

  @Prop({
    required: true,
  })
  description: string

  @Prop({
    required: true,
  })
  symptomsIds: [string]

  @Prop({
    required: true,
  })
  productIds: [string]
}

export const DiseaseSchema = SchemaFactory.createForClass(Disease)

export interface DiseaseDocument extends Disease, Document {}
