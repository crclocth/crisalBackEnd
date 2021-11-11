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
import { CompanyService } from './company.service';
import { CreateCompanyDTO, UpdateCompanyDTO } from './dto/company.dto';

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService) {}

  @Post()
  async createCompany(@Res() res, @Body() createCompanyDTO: CreateCompanyDTO) {
    const company = await this.companyService.createCompany(createCompanyDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Company Successfully Created',
      company,
    });
  }

  @Get()
  async getCompanies(@Res() res) {
    const company = await this.companyService.getCompanies();
    return res.status(HttpStatus.OK).json(company);
  }

  @Get('/:id')
  async getCompany(@Res() res, @Param('id') id) {
    const company = await this.companyService.getCompany(id);
    if (!company) throw new NotFoundException('Company does not exist!');
    return res.status(HttpStatus.OK).json(company);
  }

  @Delete('/:id')
  async deleteCompany(@Res() res, @Param('id') id) {
    const company = await this.companyService.deleteCompany(id);
    if (!company) throw new NotFoundException('Company does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Company Deleted Successfully',
      company,
    });
  }

  @Patch('/:id')
  async updateCompany(
    @Res() res,
    @Body() updateCompanyDTO: UpdateCompanyDTO,
    @Param('id') id,
  ) {
    const company = await this.companyService.updateCompany(id, updateCompanyDTO);
    if (!company) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Company Updated Successfully',
      company,
    });
  }
}
