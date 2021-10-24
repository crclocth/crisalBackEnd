import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDTO, UpdateClientDTO } from './dto/client.dto';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post()
  async createClient(@Res() res, @Body() createClientDTO: CreateClientDTO) {
    const client = await this.clientService.createClient(createClientDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Client Successfully Created',
      client,
    });
  }

  @Get()
  async getClients(@Res() res) {
    const client = await this.clientService.getClients();
    return res.status(HttpStatus.OK).json(client);
  }

  @Get('/:id')
  async getClient(@Res() res, @Param('id') id) {
    const client = await this.clientService.getClient(id);
    if (!client) throw new NotFoundException('Client does not exist!');
    return res.status(HttpStatus.OK).json(client);
  }

  @Delete('/:id')
  async deleteClient(@Res() res, @Param('id') id) {
    const client = await this.clientService.deleteClient(id);
    if (!client) throw new NotFoundException('Client does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Client Deleted Successfully',
      client,
    });
  }

  @Patch('/:id')
  async updateClient(
    @Res() res,
    @Body() updateClientDTO: UpdateClientDTO,
    @Param('id') id,
  ) {
    const client = await this.clientService.updateClient(id, updateClientDTO);
    if (!client) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Client Updated Successfully',
      client,
    });
  }
}
