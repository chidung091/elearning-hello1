import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common'
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import RoleGuard from '../auth/role.guard'
import Role from '../users/role.enum'
import { DiseaseService } from './disease.service'
import { CreateDisease } from './dto/create-question.dto'

@ApiTags('disease')
@Controller('disease')
export class DiseaseController {
  constructor(private readonly diseaseService: DiseaseService) {}

  @Post()
  @ApiOperation({ summary: 'Create new question' })
  @ApiResponse({ status: 201, description: 'Success', type: CreateDisease })
  async createQuestion(@Body() dto: CreateDisease) {
    return await this.diseaseService.create(dto)
  }

  @Post('/createMany/')
  @ApiOperation({ summary: 'Create many new question' })
  @ApiBody({ type: [CreateDisease] })
  @ApiResponse({ status: 201, description: 'Success', type: [CreateDisease] })
  async createManyQuestion(@Body() dto: CreateDisease[]) {
    return await this.diseaseService.createMany(dto)
  }

  @Get('')
  @ApiOperation({ summary: 'Get all new question' })
  @ApiResponse({ status: 200, description: 'Success', type: [CreateDisease] })
  async getAll() {
    return await this.diseaseService.getAll()
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get question by id' })
  @ApiResponse({ status: 200, description: 'Success', type: CreateDisease })
  async getById(@Param('id') id: string) {
    return await this.diseaseService.getById(id)
  }

  @Put('/:id/update')
  @ApiOperation({ summary: 'Update question' })
  @ApiResponse({ status: 201, description: 'Success', type: CreateDisease })
  async updateQuestion(@Param('id') id: string, @Body() dto: CreateDisease) {
    return await this.diseaseService.updateQuestion(id, dto)
  }
  @Delete('/:id')
  @ApiOperation({ summary: 'Create many new question' })
  @ApiResponse({ status: 201, description: 'Success', type: 'Delete success' })
  async delete(@Param('id') id: string) {
    return await this.diseaseService.deleteQuestion(id)
  }
}
