import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { SymptomsSchema, SYMPTOMS_DB } from './entity/symptoms.entity'
import { SymptomsRepository } from './repository/symptoms.repository'
import { SymptomsController } from './symptoms.controller'
import { SymptomsService } from './symptoms.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SYMPTOMS_DB, schema: SymptomsSchema }]),
  ],
  controllers: [SymptomsController],
  providers: [SymptomsService, SymptomsRepository],
})
export class SymptomsModule {}
