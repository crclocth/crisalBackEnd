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
import { CreateEmployeeDTO, UpdateEmployeeDTO } from './dto/employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  async createEmployee(
    @Res() res,
    @Body() createEmployeeDTO: CreateEmployeeDTO,
  ) {
    const employee = await this.employeeService.createEmployee(
      createEmployeeDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Employee Successfully Created',
      employee,
    });
  }

  @Get()
  async getEmployees(@Res() res) {
    const employee = await this.employeeService.getEmployees();
    return res.status(HttpStatus.OK).json(employee);
  }

  @Get('/:id')
  async getEmployee(@Res() res, @Param('id') id) {
    const employee = await this.employeeService.getEmployee(id);
    if (!employee) throw new NotFoundException('Employee does not exist!');
    return res.status(HttpStatus.OK).json(employee);
  }

  @Delete('/:id')
  async deleteEmployee(@Res() res, @Param('id') id) {
    const employee = await this.employeeService.deleteEmployee(id);
    if (!employee) throw new NotFoundException('Employee does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Employee Deleted Successfully',
      employee,
    });
  }

  @Patch('/:id')
  async updateEmployee(
    @Res() res,
    @Body() updateEmployeeDTO: UpdateEmployeeDTO,
    @Param('id') id,
  ) {
    const employee = await this.employeeService.updateEmployee(
      id,
      updateEmployeeDTO,
    );
    if (!employee) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Employee Updated Successfully',
      employee,
    });
  }
}
