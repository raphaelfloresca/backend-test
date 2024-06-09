import { Injectable, Logger } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { ExerciseCircuitMapping } from './entities/exercise-circuit-mapping.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExerciseCircuitMappingsService {
  constructor(
    @InjectRepository(ExerciseCircuitMapping)
    private exerciseCircuitMappingsRepository: Repository<ExerciseCircuitMapping>,
  ) { }

  async findAll(): Promise<ExerciseCircuitMapping[]> {
    return this.exerciseCircuitMappingsRepository.find() // SELECT * exercises
  }

  findOne(id: number): Promise<ExerciseCircuitMapping> {
    return this.exerciseCircuitMappingsRepository.findOneOrFail({ where: { id: id } })
  }

  findSome(ids: number[]): Promise<ExerciseCircuitMapping[]> {
    return this.exerciseCircuitMappingsRepository.find({
      where: { id: In(ids) }
    })
  }

  // getCircuits(circuitIds: number[]): Promise<Circuit[]> {
  //   return this.circuitsService.findSome(circuitIds)
  // }

  async seedData(): Promise<void> {
    const exerciseCircuitMappingsData = [
      { exerciseId: 1, circuitId: 1, reps: "6-8 reps", sets: "2 sets" },
      { exerciseId: 2, circuitId: 1, reps: "6-8 reps", sets: "2 sets" },
      { exerciseId: 3, circuitId: 2, reps: "10 reps", sets: "2 sets" },
      { exerciseId: 4, circuitId: 3, reps: "15 reps", sets: "3 sets" },
      { exerciseId: 5, circuitId: 3, reps: "15 reps", sets: "3 sets" },
      { exerciseId: 3, circuitId: 4, reps: "10-12 reps", sets: "4 sets", weight: "90kg" },
      { exerciseId: 6, circuitId: 5, reps: "8 reps", sets: "4 sets", weight: "18-25kg" },
      { exerciseId: 7, circuitId: 6, reps: "10-12 reps", sets: "4 sets" },
      { exerciseId: 8, circuitId: 6, reps: "10-12 reps", sets: "4 sets" },
      { exerciseId: 9, circuitId: 6, reps: "6-8 reps", sets: "4 sets" },
      { exerciseId: 10, circuitId: 7, reps: "1 rep", sets: "1 set" },
      { exerciseId: 11, circuitId: 7, reps: "1 rep", sets: "1 set" },
      { exerciseId: 12, circuitId: 7, reps: "20 sec", sets: "1 set" },
      { exerciseId: 13, circuitId: 7, reps: "40 sec", sets: "1 set" },
    ];

    try {
      await this.exerciseCircuitMappingsRepository.save(exerciseCircuitMappingsData);
      Logger.log('Data seeded successfully');
    } catch (error) {
      Logger.error(`Error seeding data: ${error.message}`, error.stack);
    }
  }
}
