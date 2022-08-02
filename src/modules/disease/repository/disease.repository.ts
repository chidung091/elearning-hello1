import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { BaseRepository } from '../../../common/repository/base.repository'
import { DiseaseDocument, DISEASE_DB } from '../entity/disease.entity'

@Injectable()
export class DiseaseRepository extends BaseRepository<DiseaseDocument> {
  constructor(
    @InjectModel(DISEASE_DB)
    private readonly diseaseModel: Model<DiseaseDocument>,
  ) {
    super(diseaseModel)
  }
}
