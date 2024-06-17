import { Field, ObjectType, Int } from "@nestjs/graphql"
import { ExerciseCircuitMapping } from "src/exercise-circuit-mappings/entities/exercise-circuit-mapping.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
@ObjectType()
export class Circuit {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number

  @Column()
  @Field()
  name: string

  @OneToMany(() => ExerciseCircuitMapping, exerciseCircuitMapping => exerciseCircuitMapping.circuit)
  @Field(type => [ExerciseCircuitMapping])
  exerciseCircuitMappings: ExerciseCircuitMapping[]
}
