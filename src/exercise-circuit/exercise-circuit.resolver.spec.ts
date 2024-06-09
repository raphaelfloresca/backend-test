import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseCircuitResolver } from './exercise-circuit.resolver';
import { ExerciseCircuitService } from './exercise-circuit.service';

describe('ExerciseCircuitResolver', () => {
  let resolver: ExerciseCircuitResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseCircuitResolver, ExerciseCircuitService],
    }).compile();

    resolver = module.get<ExerciseCircuitResolver>(ExerciseCircuitResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
