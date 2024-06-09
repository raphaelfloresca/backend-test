import { Resolver, Query, Int, Args, ResolveField, Parent } from '@nestjs/graphql'
import { ExerciseCircuitMapping } from './entities/exercise-circuit-mapping.entity';
import { ExerciseCircuitMappingsService } from './exercise-circuit-mappings.service';

@Resolver(() => ExerciseCircuitMapping)
export class ExerciseCircuitMappingsResolver {
  constructor(private readonly exerciseCircuitMappingsService: ExerciseCircuitMappingsService) { }

  @Query(returns => ExerciseCircuitMapping)
  getExerciseCircuitMapping(@Args('id', { type: () => Int }) id: number): Promise<ExerciseCircuitMapping> {
    return this.exerciseCircuitMappingsService.findOne(id)
  }

  @Query(returns => [ExerciseCircuitMapping])
  exerciseCircuitMappings(): Promise<ExerciseCircuitMapping[]> {
    return this.exerciseCircuitMappingsService.findAll()
  }
}
