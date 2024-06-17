import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseCircuitMapping } from './entities/exercise-circuit-mapping.entity';
import { ExerciseCircuitMappingsService } from './exercise-circuit-mappings.service';
import { ExerciseCircuitMappingsResolver } from './exercise-circuit-mappings.resolver';


@Module({
  imports: [TypeOrmModule.forFeature([ExerciseCircuitMapping])],
  providers: [ExerciseCircuitMappingsService, ExerciseCircuitMappingsResolver]
})
export class ExerciseCircuitMappingsModule { }
