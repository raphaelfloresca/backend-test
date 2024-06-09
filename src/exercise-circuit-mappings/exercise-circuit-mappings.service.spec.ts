import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseCircuitMappingsService } from './exercise-circuit-mappings.service';

describe('ExerciseCircuitMappingsService', () => {
  let service: ExerciseCircuitMappingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseCircuitMappingsService],
    }).compile();

    service = module.get<ExerciseCircuitMappingsService>(ExerciseCircuitMappingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
