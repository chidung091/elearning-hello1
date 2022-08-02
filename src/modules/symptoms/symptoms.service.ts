import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateSymptoms } from './dto/create-symptoms.dto'
import { SymptomsDocument } from './entity/symptoms.entity'
import { SymptomsRepository } from './repository/symptoms.repository'

@Injectable()
export class SymptomsService {
  constructor(private readonly symptomsRepository: SymptomsRepository) {}

  public async create(dto: CreateSymptoms) {
    return this.symptomsRepository.create(dto)
  }
  public async createMany(dto: CreateSymptoms[]): Promise<SymptomsDocument[]> {
    return this.symptomsRepository.createMany(dto)
  }
  public async getAll(): Promise<SymptomsDocument[]> {
    return this.symptomsRepository.getAll()
  }

  public async getById(id: string): Promise<SymptomsDocument> {
    return this.symptomsRepository.getById({ id })
  }

  public async checkQuestion(ids: [string]) {
    const idss = []
    for (let i = 0; i < ids.length; i++) {
      console.log(ids[i])
      const data = await this.symptomsRepository.getById({ id: ids[i] })
      idss.push(data)
    }
    return idss
  }
  public async getByIdForTest(id: string): Promise<SymptomsDocument> {
    const result = await this.symptomsRepository.getById({ id })
    return result
  }
  public async updateQuestion(
    id: string,
    dto: CreateSymptoms,
  ): Promise<SymptomsDocument> {
    const question = await this.symptomsRepository.getById({ id })
    if (!question) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Can't find Question`,
        },
        HttpStatus.BAD_REQUEST,
      )
    }
    return this.symptomsRepository.updateById({ id, update: dto })
  }

  public async deleteQuestion(id: string): Promise<SymptomsDocument> {
    const question = await this.symptomsRepository.getById({ id })
    if (!question) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Can't find Question`,
        },
        HttpStatus.BAD_REQUEST,
      )
    }
    return this.symptomsRepository.deleteById(id)
  }
}
