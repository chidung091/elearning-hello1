import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateDisease } from './dto/create-question.dto'
import { DiseaseDocument } from './entity/disease.entity'
import { DiseaseRepository } from './repository/disease.repository'

@Injectable()
export class DiseaseService {
  constructor(private readonly diseaseRepository: DiseaseRepository) {}

  public async create(dto: CreateDisease) {
    return this.diseaseRepository.create(dto)
  }
  public async createMany(dto: CreateDisease[]): Promise<DiseaseDocument[]> {
    return this.diseaseRepository.createMany(dto)
  }
  public async getAll(): Promise<DiseaseDocument[]> {
    return this.diseaseRepository.getAll()
  }

  public async getById(id: string): Promise<DiseaseDocument> {
    return this.diseaseRepository.getById({ id })
  }

  public async getByIdForTest(id: string): Promise<DiseaseDocument> {
    const result = await this.diseaseRepository.getById({ id })
    return result
  }
  public async updateQuestion(
    id: string,
    dto: CreateDisease,
  ): Promise<DiseaseDocument> {
    const question = await this.diseaseRepository.getById({ id })
    if (!question) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Can't find Question`,
        },
        HttpStatus.BAD_REQUEST,
      )
    }
    return this.diseaseRepository.updateById({ id, update: dto })
  }

  public async deleteQuestion(id: string): Promise<DiseaseDocument> {
    const question = await this.diseaseRepository.getById({ id })
    if (!question) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Can't find Question`,
        },
        HttpStatus.BAD_REQUEST,
      )
    }
    return this.diseaseRepository.deleteById(id)
  }
}
