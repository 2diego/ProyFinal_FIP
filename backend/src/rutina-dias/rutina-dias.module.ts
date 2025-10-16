import { Module } from '@nestjs/common';
import { RutinaDiasService } from './services/rutina-dias.service';
import { RutinaDiasController } from './controllers/rutina-dias.controller';

@Module({
  providers: [RutinaDiasService],
  controllers: [RutinaDiasController]
})
export class RutinaDiasModule {}
