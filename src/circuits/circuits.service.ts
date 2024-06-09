import { Injectable, Logger } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Circuit } from './entities/circuit.entity';

@Injectable()
export class CircuitsService {
  constructor(
    @InjectRepository(Circuit)
    private circuitsRepository: Repository<Circuit>,
  ) { }

  async findAll(): Promise<Circuit[]> {
    return this.circuitsRepository.find() // SELECT * exercises
  }

  findOne(id: number): Promise<Circuit> {
    return this.circuitsRepository.findOneOrFail({ where: { id: id } })
  }

  findSome(ids: number[]): Promise<Circuit[]> {
    return this.circuitsRepository.find({
      where: { id: In(ids) }
    })
  }

  findRelatedExercises(id: number): Promise<Circuit[]> {
    return this.circuitsRepository.find({
      where: { id: id },
      relations: {
        exerciseCircuitMappings: {
          exercise: true
        },
      },
    })
  }

  // getCircuits(circuitIds: number[]): Promise<Circuit[]> {
  //   return this.circuitsService.findSome(circuitIds)
  // }

  async seedData(): Promise<void> {
    const circuitsData = [
      { name: 'Superset 1' },
      { name: 'Single 1' },
      { name: 'Superset 2' },
      { name: 'Single 2' },
      { name: 'Single 3' },
      { name: 'Triset' },
      { name: 'Circuit' },
    ];

    try {
      await this.circuitsRepository.save(circuitsData);
      Logger.log('Data seeded successfully');
    } catch (error) {
      Logger.error(`Error seeding data: ${error.message}`, error.stack);
    }
  }
}
