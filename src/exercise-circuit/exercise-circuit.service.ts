import { Injectable, Logger } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciseCircuit } from './entities/exercise-circuit.entity';

@Injectable()
export class ExerciseCircuitService {
  constructor(
    @InjectRepository(ExerciseCircuit)
    private exerciseCircuitsRepository: Repository<ExerciseCircuit>,
  ) { }

  async findAll(): Promise<ExerciseCircuit[]> {
    return this.exerciseCircuitsRepository.find() // SELECT * exercises
  }

  findOne(id: number): Promise<ExerciseCircuit> {
    return this.exerciseCircuitsRepository.findOneOrFail({ where: { id: id } })
  }

  findSome(ids: number[]): Promise<ExerciseCircuit[]> {
    return this.exerciseCircuitsRepository.find({
      where: { id: In(ids) }
    })
  }

  async seedData(): Promise<void> {
    const ExerciseCircuitMapping = [
      { sets: 4, reps: 3 },
      { sets: 3, reps: 1 },
      { sets: 9, reps: 7 },
      { sets: 3, reps: 5 },
    ];

    try {
      await this.exerciseCircuitsRepository.save(ExerciseCircuitMapping);
      Logger.log('Data seeded successfully');
    } catch (error) {
      Logger.error(`Error seeding data: ${error.message}`, error.stack);
    }
  }
}
