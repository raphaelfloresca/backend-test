import { Field, ObjectType, Int } from "@nestjs/graphql"
import { Column, Entity, OneToMany, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm"
import { ExerciseCircuit } from "src/exercise-circuit/entities/exercise-circuit.entity"

@Entity()
@ObjectType()
export class Exercise {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number

  @Column()
  @Field()
  name: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  imageURL: string

  @OneToMany(() => ExerciseCircuit, exerciseCircuit => exerciseCircuit.exercise)
  exerciseCircuits: ExerciseCircuit[];
}
