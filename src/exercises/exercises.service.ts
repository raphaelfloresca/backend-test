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

  // getCircuits(circuitIds: number[]): Promise<Circuit[]> {
  //   return this.circuitsService.findSome(circuitIds)
  // }

  async seedData(): Promise<void> {
    const exercisesData = [
      { name: 'Barbell Lunge (Left)', imageURL: 'barbell-lunge.jpg' },
      { name: 'Barbell Lunge (Right)', imageURL: 'barbell-lunge.jpg' },
      { name: 'Sumo Deadlift', imageURL: 'sumo-deadlift.jpg' },
      { name: 'Cable Kickback (Left)', imageURL: 'cable-kickback.jpg' },
      { name: 'Cable Kickback (Right)', imageURL: 'cable-kickback.jpg' },
      { name: 'Dumbbell Shoulder Press', imageURL: 'dumbbell-shoulder-press.jpg' },
      { name: 'Single Arm Cable Row (Left)', imageURL: 'single-arm-cable-row.jpg' },
      { name: 'Single Arm Barbell Row (Left)', imageURL: 'single-arm-barbell-row.jpg' },
      { name: 'Single Arm Cable Row (Right)', imageURL: 'single-arm-cable-row.jpg' },
      { name: 'Cable Seated Row', imageURL: 'cable-seated-row.jpg' },
      { name: 'Dumbbell Jump Squat', imageURL: 'dumbbell-jump-squat.jpg' },
      { name: 'Barbell Lunge', imageURL: 'barbell-lunge.jpg' },
      { name: 'Plank With Stability Ball', imageURL: 'plank-with-stability-ball.jpg' },
      { name: 'Glute Bridge Hold', imageURL: 'glute-bridge-hold.jpg' },
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
