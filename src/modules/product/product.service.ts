import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateProduct } from './dto/create-product.dto'
import { ProductDocument } from './entity/product.entity'
import { ProductRepository } from './repository/product.repository'

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  public async create(dto: CreateProduct) {
    return this.productRepository.create(dto)
  }
  public async createMany(dto: CreateProduct[]): Promise<ProductDocument[]> {
    return this.productRepository.createMany(dto)
  }
  public async getAll(): Promise<ProductDocument[]> {
    return this.productRepository.getAll()
  }

  public async getById(id: string): Promise<ProductDocument> {
    return this.productRepository.getById({ id })
  }

  public async getByIdForTest(id: string): Promise<ProductDocument> {
    const result = await this.productRepository.getById({ id })
    return result
  }
  public async updateQuestion(
    id: string,
    dto: CreateProduct,
  ): Promise<ProductDocument> {
    const question = await this.productRepository.getById({ id })
    if (!question) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Can't find Question`,
        },
        HttpStatus.BAD_REQUEST,
      )
    }
    return this.productRepository.updateById({ id, update: dto })
  }

  public async deleteQuestion(id: string): Promise<ProductDocument> {
    const question = await this.productRepository.getById({ id })
    if (!question) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Can't find Question`,
        },
        HttpStatus.BAD_REQUEST,
      )
    }
    return this.productRepository.deleteById(id)
  }
}
