import { Field, ObjectType, Int } from "@nestjs/graphql"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { ExerciseCircuit } from "src/exercise-circuit/entities/exercise-circuit.entity"

@Entity()
@ObjectType()
export class Circuit {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number

  @Column()
  @Field()
  name: string

  @OneToMany(() => ExerciseCircuit, exerciseCircuit => exerciseCircuit.circuit)
  @Field(type => [ExerciseCircuit])
  exerciseCircuits: ExerciseCircuit[];
}
