import { Module } from '@nestjs/common';
import { ExerciseCircuitService } from './exercise-circuit.service';
import { ExerciseCircuitResolver } from './exercise-circuit.resolver';
import { ExerciseCircuit } from './entities/exercise-circuit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseCircuit])],
  providers: [ExerciseCircuitResolver, ExerciseCircuitService],
})
export class ExerciseCircuitModule { }
