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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import RoleGuard from '../auth/role.guard'
import { CreateDisease } from '../disease/dto/create-question.dto'
import Role from '../users/role.enum'
import { CreateSymptoms } from './dto/create-symptoms.dto'
import { FindSymptoms } from './dto/find-symptoms.dto'
import { SymptomsService } from './symptoms.service'

@ApiTags('symptoms')
@Controller('symptoms')
export class SymptomsController {
  constructor(private readonly symptomsService: SymptomsService) {}

  @Post()
  @ApiOperation({ summary: 'Create new question' })
  @ApiResponse({ status: 201, description: 'Success', type: CreateSymptoms })
  async createQuestion(@Body() dto: CreateSymptoms) {
    return await this.symptomsService.create(dto)
  }

  @Post('/createMany/')
  @ApiOperation({ summary: 'Create many new question' })
  @ApiBody({ type: [CreateSymptoms] })
  @ApiResponse({ status: 201, description: 'Success', type: [CreateSymptoms] })
  async createManyQuestion(@Body() dto: CreateSymptoms[]) {
    return await this.symptomsService.createMany(dto)
  }

  @Get('')
  @ApiOperation({ summary: 'Get all new question' })
  @ApiResponse({ status: 200, description: 'Success', type: [CreateSymptoms] })
  async getAll() {
    return await this.symptomsService.getAll()
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get question by id' })
  @ApiResponse({ status: 200, description: 'Success', type: CreateSymptoms })
  async getById(@Param('id') id: string) {
    return await this.symptomsService.getById(id)
  }
  @Post('many')
  @ApiOperation({ summary: 'Get question by id' })
  @ApiResponse({ status: 200, description: 'Success', type: CreateSymptoms })
  async get(@Body() dto: FindSymptoms) {
    return await this.symptomsService.checkQuestion(dto.symptomsIds)
  }

  @Put('/:id/update')
  @ApiOperation({ summary: 'Update question' })
  @ApiResponse({ status: 201, description: 'Success', type: CreateSymptoms })
  async updateQuestion(@Param('id') id: string, @Body() dto: CreateSymptoms) {
    return await this.symptomsService.updateQuestion(id, dto)
  }
  @Delete('/:id')
  @ApiOperation({ summary: 'Create many new question' })
  @ApiResponse({ status: 201, description: 'Success', type: 'Delete success' })
  async delete(@Param('id') id: string) {
    return await this.symptomsService.deleteQuestion(id)
  }
}
