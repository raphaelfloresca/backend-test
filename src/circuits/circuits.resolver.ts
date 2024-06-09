import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Circuit } from './entities/circuit.entity';
import { CircuitsService } from './circuits.service';

@Resolver(of => Circuit)
export class CircuitsResolver {
  constructor(private circuitsService: CircuitsService,
  ) { }

  @Query(returns => Circuit, { name: 'circuit' })
  getExercise(@Args('id', { type: () => Int }) id: number) {
    return this.circuitsService.findOne(id);
  }

  @Query(returns => [Circuit], { name: 'circuits' })
  exercises() {
    return this.circuitsService.findAll();
  }
}


