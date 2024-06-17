import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseCircuitMappingsResolver } from './exercise-circuit-mappings.resolver';
import { ExerciseCircuitMappingsService } from './exercise-circuit-mappings.service';

describe('ExerciseCircuitMappingsResolver', () => {
  let resolver: ExerciseCircuitMappingsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseCircuitMappingsResolver, ExerciseCircuitMappingsService],
    }).compile();

    resolver = module.get<ExerciseCircuitMappingsResolver>(ExerciseCircuitMappingsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
