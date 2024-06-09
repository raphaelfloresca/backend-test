import { Module } from '@nestjs/common';
import { CircuitsService } from './circuits.service';
import { CircuitsResolver } from './circuits.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Circuit } from './entities/circuit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Circuit])],
  providers: [CircuitsResolver, CircuitsService],
})
export class CircuitsModule { }
