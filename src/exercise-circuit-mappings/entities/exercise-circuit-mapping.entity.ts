import { Field, ObjectType, Int } from "@nestjs/graphql"
import { Circuit } from "src/circuits/entities/circuit.entity"
import { Exercise } from "src/exercises/entities/exercise.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
@ObjectType()
export class ExerciseCircuitMapping {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number

  @Column()
  @Field(type => Int)
  exerciseId: number

  @Column()
  @Field(type => Int)
  circuitId: number


  @Column({ nullable: true })
  @Field(type => Int, { nullable: true })
  swapWithExerciseId: number

  @Column()
  @Field()
  reps: string

  @Column()
  @Field()
  sets: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  weight: string

  @ManyToOne(() => Circuit, circuit => circuit.exerciseCircuitMappings)
  @Field(type => Circuit)
  circuit: Circuit

  @ManyToOne(() => Exercise, exercise => exercise.exerciseCircuitMappings)
  @Field(type => Exercise)
  exercise: Exercise
}
