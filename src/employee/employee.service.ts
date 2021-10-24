import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDTO, UpdateEmployeeDTO } from './dto/employee.dto';
import { Employee } from './model/employee.model';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
  ) {}

  async createEmployee(
    createEmployeeDTO: CreateEmployeeDTO,
  ): Promise<Employee> {
    const newEmployee = new this.employeeModel(createEmployeeDTO);
    return newEmployee.save();
  }

  async getEmployees(): Promise<Employee[]> {
    const employees = await this.employeeModel.find();
    return employees;
  }

  async getEmployee(id: string): Promise<Employee> {
    const employee = await this.employeeModel.findById(id);
    return employee;
  }

  async deleteEmployee(id: string): Promise<any> {
    const employee = await this.employeeModel.findByIdAndDelete(id);
    return employee;
  }

  async updateEmployee(
    id: string,
    updateEmployeeDTO: UpdateEmployeeDTO,
  ): Promise<Employee> {
    const updatedEmployee = await this.employeeModel
      .findByIdAndUpdate(id, { $set: updateEmployeeDTO }, { new: true })
      .exec();
    return updatedEmployee;
  }
}
