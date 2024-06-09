import { Resolver, Query, Int, Args } from '@nestjs/graphql'
import { Exercise } from './exercise.entity'
import { ExercisesService } from './exercises.service'

@Resolver(of => Exercise)
export class ExercisesResolver {
  constructor(private exercisesService: ExercisesService) { }

  @Query(returns => Exercise)
  getExercise(@Args('id', { type: () => Int }) id: number): Promise<Exercise> {
    return this.exercisesService.findOne(id)
  }

  @Query(returns => [Exercise])
  exercises(): Promise<Exercise[]> {
    return this.exercisesService.findAll()
  }
}
