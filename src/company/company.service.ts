import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDTO, UpdateCompanyDTO } from './dto/company.dto';
import { Company } from './model/company.model';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel('Company')
    private readonly companyModel: Model<Company>,
  ) {}

  async createCompany(createCompanyDTO: CreateCompanyDTO): Promise<Company> {
    const newCompany = new this.companyModel(createCompanyDTO);
    return newCompany.save();
  }

  async getCompanies(): Promise<Company[]> {
    const companies = await this.companyModel.find();
    return companies;
  }

  async getCompany(id: string): Promise<Company> {
    const company = await this.companyModel.findById(id);
    return company;
  }

  async deleteCompany(id: string): Promise<any> {
    const company = await this.companyModel.findByIdAndDelete(id);
    return company;
  }

  async updateCompany(
    id: string,
    updateCompanyDTO: UpdateCompanyDTO,
  ): Promise<Company> {
    const updatedCompany = await this.companyModel
      .findByIdAndUpdate(id, { $set: updateCompanyDTO }, { new: true })
      .exec();
    return updatedCompany;
  }
}
