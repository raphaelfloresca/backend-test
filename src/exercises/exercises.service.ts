import { Injectable } from '@nestjs/common';
import { Exercise } from "./exercise.entity"

@Injectable()
export class ExercisesService {
  async findAll(): Promise<Exercise[]> {
    const exercise = new Exercise()
    exercise.id = 1
    exercise.name = 'Squat'
    exercise.imageURL = 'https://test.co'

    return [exercise]
  }
}
