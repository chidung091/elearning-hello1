import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateProduct } from './dto/create-product.dto'
import { ProductService } from './product.service'

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Create new question' })
  @ApiResponse({ status: 201, description: 'Success', type: CreateProduct })
  async createQuestion(@Body() dto: CreateProduct) {
    return await this.productService.create(dto)
  }

  @Post('/createMany/')
  @ApiOperation({ summary: 'Create many new question' })
  @ApiBody({ type: [CreateProduct] })
  @ApiResponse({ status: 201, description: 'Success', type: [CreateProduct] })
  async createManyQuestion(@Body() dto: CreateProduct[]) {
    return await this.productService.createMany(dto)
  }

  @Get('')
  @ApiOperation({ summary: 'Get all new question' })
  @ApiResponse({ status: 200, description: 'Success', type: [CreateProduct] })
  async getAll() {
    return await this.productService.getAll()
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get question by id' })
  @ApiResponse({ status: 200, description: 'Success', type: CreateProduct })
  async getById(@Param('id') id: string) {
    return await this.productService.getById(id)
  }

  @Put('/:id/update')
  @ApiOperation({ summary: 'Update question' })
  @ApiResponse({ status: 201, description: 'Success', type: CreateProduct })
  async updateQuestion(@Param('id') id: string, @Body() dto: CreateProduct) {
    return await this.productService.updateQuestion(id, dto)
  }
  @Delete('/:id')
  @ApiOperation({ summary: 'Create many new question' })
  @ApiResponse({ status: 201, description: 'Success', type: 'Delete success' })
  async delete(@Param('id') id: string) {
    return await this.productService.deleteQuestion(id)
  }
}
