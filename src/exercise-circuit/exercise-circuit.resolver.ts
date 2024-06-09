import { Resolver, Query, Int, Args, ResolveField, Parent } from '@nestjs/graphql'
import { ExerciseCircuit } from './entities/exercise-circuit.entity';
import { ExerciseCircuitService } from './exercise-circuit.service';

@Resolver(() => ExerciseCircuit)
export class ExerciseCircuitResolver {
  constructor(private readonly exerciseCircuitService: ExerciseCircuitService) { }

  @Query(returns => ExerciseCircuit)
  getExerciseCircuit(@Args('id', { type: () => Int }) id: number): Promise<ExerciseCircuit> {
    return this.exerciseCircuitService.findOne(id)
  }

  @Query(returns => [ExerciseCircuit])
  exerciseCircuits(): Promise<ExerciseCircuit[]> {
    return this.exerciseCircuitService.findAll()
  }

  // @ResolveField(returns => [Circuit])
  // circuits(@Parent() exercise: ExerciseCircuit): Promise<Circuit[]> {
  //   return this.exercisesService.getCircuits(exercise.circuitIds);
  // }
}
