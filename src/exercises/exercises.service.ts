import { Injectable, Logger } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { Exercise } from './entities/exercise.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exercisesRepository: Repository<Exercise>,
  ) { }

  async findAll(): Promise<Exercise[]> {
    return this.exercisesRepository.find() // SELECT * exercises
  }

  findOne(id: number): Promise<Exercise> {
    return this.exercisesRepository.findOneOrFail({ where: { id: id } })
  }

  findSome(ids: number[]): Promise<Exercise[]> {
    return this.exercisesRepository.find({
      where: { id: In(ids) }
    })
  }

  async seedData(): Promise<void> {
    const exercisesData = [
      { name: 'Barbell Lunge (Left)' },
      { name: 'Barbell Lunge (Right)' },
      { name: 'Sumo Deadlift' },
      { name: 'Cable Kickback (Left)' },
      { name: 'Cable Kickback (Right)' },
      { name: 'Dumbbell Shoulder Press' },
      { name: 'Single Arm Cable Row (Left)', imageIndex: 0 },
      { name: 'Single Arm Barbell Row (Left)', imageIndex: 1 },
      { name: 'Single Arm Cable Row (Right)', imageIndex: 0 },
      { name: 'Cable Seated Row', imageIndex: 2 },
      { name: 'Dumbbell Jump Squat' },
      { name: 'Barbell Lunge' },
      { name: 'Plank With Stability Ball' },
      { name: 'Glute Bridge Hold' },
      // Add more exercises as needed
    ];

    try {
      await this.exercisesRepository.save(exercisesData);
      Logger.log('Data seeded successfully');
    } catch (error) {
      Logger.error(`Error seeding data: ${error.message}`, error.stack);
    }
  }
}
