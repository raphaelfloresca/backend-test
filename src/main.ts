import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExercisesService } from './exercises/exercises.service';
import { CircuitsService } from './circuits/circuits.service';
import { ExerciseCircuitMappingsService } from './exercise-circuit-mappings/exercise-circuit-mappings.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const exercisesService = app.get(ExercisesService);
  await exercisesService.seedData();


  const circuitsService = app.get(CircuitsService);
  await circuitsService.seedData();


  const exerciseCircuitMappingsService = app.get(ExerciseCircuitMappingsService);
  await exerciseCircuitMappingsService.seedData();

  await app.listen(3000);
}
bootstrap();
