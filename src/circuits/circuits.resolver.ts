import { Resolver, Query, Int, Args, ResolveField, Parent } from '@nestjs/graphql'
import { Circuit } from './entities/circuit.entity'
import { CircuitsService } from './circuits.service'

@Resolver(of => Circuit)
export class CircuitsResolver {
  constructor(private circuitsService: CircuitsService) { }

  @Query(returns => Circuit)
  getCircuit(@Args('id', { type: () => Int }) id: number): Promise<Circuit> {
    return this.circuitsService.findOne(id)
  }

  @Query(returns => [Circuit])
  circuits(): Promise<Circuit[]> {
    return this.circuitsService.findAll()
  }
}
