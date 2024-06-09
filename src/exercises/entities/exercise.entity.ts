import { Field, ObjectType, Int } from "@nestjs/graphql"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { ExerciseCircuitMapping } from "src/exercise-circuit-mappings/entities/exercise-circuit-mapping.entity"

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

  @OneToMany(() => ExerciseCircuitMapping, exerciseCircuitMapping => exerciseCircuitMapping.exercise)
  @Field(type => [ExerciseCircuitMapping])
  exerciseCircuitMappings: ExerciseCircuitMapping[]
}
