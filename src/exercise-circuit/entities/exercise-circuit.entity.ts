import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exercise } from 'src/exercises/entities/exercise.entity';
import { Circuit } from 'src/circuits/entities/circuit.entity';

@ObjectType()
@Entity()
export class ExerciseCircuit {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  sets: number;

  @Field(() => Int)
  @Column()
  reps: number;

  @ManyToOne(() => Exercise, exercise => exercise.exerciseCircuits)
  @Field(type => Exercise)
  exercise: Exercise;

  @ManyToOne(() => Circuit, circuit => circuit.exerciseCircuits)
  @Field(type => Circuit)
  circuit: Circuit;
}
