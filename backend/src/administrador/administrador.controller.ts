import { Controller } from '@nestjs/common';
import { AdministradorService } from './administrador.service';

@Controller('administrador')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}
}
