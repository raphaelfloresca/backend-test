import { Test, TestingModule } from '@nestjs/testing';
import { CircuitsResolver } from './circuits.resolver';
import { CircuitsService } from './circuits.service';

describe('CircuitsResolver', () => {
  let resolver: CircuitsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CircuitsResolver, CircuitsService],
    }).compile();

    resolver = module.get<CircuitsResolver>(CircuitsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
