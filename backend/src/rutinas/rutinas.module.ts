import { Module } from '@nestjs/common';
import { RutinasController } from './controllers/rutinas.controller';
import { RutinasService } from './services/rutinas.service';


@Module({
  controllers: [RutinasController],
  providers: [RutinasService],
  
})
export class RutinasModule {}
