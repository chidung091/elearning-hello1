import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export const SYMPTOMS_DB = 'symptoms'

@Schema({
  collection: SYMPTOMS_DB,
  timestamps: true,
  toJSON: { virtuals: true },
  collation: { locale: 'vi' },
  validateBeforeSave: true,
})
export class Symptoms {
  @Prop({
    required: true,
  })
  name: string

  @Prop({
    required: true,
  })
  description: string
}

export const SymptomsSchema = SchemaFactory.createForClass(Symptoms)

export interface SymptomsDocument extends Symptoms, Document {}
