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
import { BatteryService } from './battery.service';
import { CreateBatteryDTO, UpdateBatteryDTO } from './dto/battery.dto';

@Controller('battery')
export class BatteryController {
    constructor(private batteryService: BatteryService) {}

  @Post()
  async createBattery(@Res() res, @Body() createBatteryDTO: CreateBatteryDTO) {
    const battery = await this.batteryService.createBattery(createBatteryDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Battery Successfully Created',
      battery,
    });
  }

  @Get()
  async getBatteries(@Res() res) {
    const battery = await this.batteryService.getBatteries();
    return res.status(HttpStatus.OK).json(battery);
  }

  @Get('/:id')
  async getBattery(@Res() res, @Param('id') id) {
    const battery = await this.batteryService.getBattery(id);
    if (!battery) throw new NotFoundException('Battery does not exist!');
    return res.status(HttpStatus.OK).json(battery);
  }

  @Delete('/:id')
  async deleteBattery(@Res() res, @Param('id') id) {
    const battery = await this.batteryService.deleteBattery(id);
    if (!battery) throw new NotFoundException('Battery does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Battery Deleted Successfully',
      battery,
    });
  }

  @Patch('/:id')
  async updateBattery(
    @Res() res,
    @Body() updateBatteryDTO: UpdateBatteryDTO,
    @Param('id') id,
  ) {
    const battery = await this.batteryService.updateBattery(id, updateBatteryDTO);
    if (!battery) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Battery Updated Successfully',
      battery,
    });
  }
}