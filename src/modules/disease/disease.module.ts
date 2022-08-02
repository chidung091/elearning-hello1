import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { DiseaseController } from './disease.controller'
import { DiseaseService } from './disease.service'
import { DiseaseSchema, DISEASE_DB } from './entity/disease.entity'
import { DiseaseRepository } from './repository/disease.repository'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DISEASE_DB, schema: DiseaseSchema }]),
  ],
  controllers: [DiseaseController],
  providers: [DiseaseService, DiseaseRepository],
})
export class DiseaseModule {}
