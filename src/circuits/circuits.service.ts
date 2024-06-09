import { Injectable, Logger } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { Circuit } from './entities/circuit.entity';
import { InjectRepository } from '@nestjs/typeorm';

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

  async seedData(): Promise<void> {
    const circuitsData = [
      { name: 'Warm Up' },
      { name: 'Single 1' },
      { name: 'Single 2' },
      { name: 'Triset' },
      { name: 'Circuit' }
    ];

    try {
      await this.circuitsRepository.save(circuitsData);
      Logger.log('Data seeded successfully');
    } catch (error) {
      Logger.error(`Error seeding data: ${error.message}`, error.stack);
    }
  }
}
