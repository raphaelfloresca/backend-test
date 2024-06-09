import { Field, ObjectType, Int } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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
}
