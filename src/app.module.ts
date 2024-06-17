import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from './exercises/exercises.module';
import { CircuitsModule } from './circuits/circuits.module';
import { ExerciseCircuitMappingsModule } from './exercise-circuit-mappings/exercise-circuit-mappings.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    ExercisesModule,
    CircuitsModule,
    ExerciseCircuitMappingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
