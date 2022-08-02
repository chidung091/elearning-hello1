import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { BaseRepository } from '../../../common/repository/base.repository'
import { SymptomsDocument, SYMPTOMS_DB } from '../entity/symptoms.entity'

@Injectable()
export class SymptomsRepository extends BaseRepository<SymptomsDocument> {
  constructor(
    @InjectModel(SYMPTOMS_DB)
    private readonly symptomsModel: Model<SymptomsDocument>,
  ) {
    super(symptomsModel)
  }
}
