import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseCircuitService } from './exercise-circuit.service';

describe('ExerciseCircuitService', () => {
  let service: ExerciseCircuitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseCircuitService],
    }).compile();

    service = module.get<ExerciseCircuitService>(ExerciseCircuitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
