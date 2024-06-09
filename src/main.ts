import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExercisesService } from './exercises/exercises.service';
import { CircuitsService } from './circuits/circuits.service';
import { ExerciseCircuitService } from './exercise-circuit/exercise-circuit.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Clear exercises table
  const exercisesService = app.get(ExercisesService);
  const circuitsService = app.get(CircuitsService);
  const exerciseCircuitsService = app.get(ExerciseCircuitService);
  await exercisesService.seedData();
  await circuitsService.seedData();
  await exerciseCircuitsService.seedData();

  await app.listen(3000);
}
bootstrap();
