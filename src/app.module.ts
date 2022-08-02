import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DATABASE_URI, ENV } from './config/secrets'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'
import { QuestionModule } from './modules/question/question.module'
import { TestModule } from './modules/test/test.module'
import { SymptomsModule } from './modules/symptoms/symptoms.module'
import { DiseaseModule } from './modules/disease/disease.module'
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
    }),
    MongooseModule.forRoot(DATABASE_URI),
    AuthModule,
    UsersModule,
    QuestionModule,
    TestModule,
    SymptomsModule,
    DiseaseModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
