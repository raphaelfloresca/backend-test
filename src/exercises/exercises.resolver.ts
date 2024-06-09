import { Resolver, Query } from '@nestjs/graphql'
import { Exercise } from './exercise.entity'
import { ExercisesService } from './exercises.service'

@Resolver(of => Exercise)
export class ExercisesResolver {
  constructor(private exercisesService: ExercisesService) { }

  @Query(returns => [Exercise])
  exercises(): Promise<Exercise[]> {
    return this.exercisesService.findAll()
  }
}
