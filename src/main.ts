import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExercisesService } from './exercises/exercises.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Seed exercises table
  const exercisesService = app.get(ExercisesService);
  await exercisesService.seedData();

  await app.listen(3000);
}
bootstrap();
