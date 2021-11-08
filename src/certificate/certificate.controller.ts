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
import { CertificateService } from './certificate.service';
import { CreateCertificateDTO, UpdateCertificateDTO } from './dto/certificate.dto';

@Controller('certificate')
export class CertificateController {
    constructor(private certificateService: CertificateService) {}

  @Post()
  async createCertificate(@Res() res, @Body() createCertificateDTO: CreateCertificateDTO) {
    const certificate = await this.certificateService.createCertificate(createCertificateDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Certificate Successfully Created',
      certificate,
    });
  }

  @Get()
  async getCertificates(@Res() res) {
    const certificate = await this.certificateService.getCertificates();
    return res.status(HttpStatus.OK).json(certificate);
  }

  @Get('/:id')
  async getCertificate(@Res() res, @Param('id') id) {
    const certificate = await this.certificateService.getCertificate(id);
    if (!certificate) throw new NotFoundException('Certificate does not exist!');
    return res.status(HttpStatus.OK).json(certificate);
  }

  @Delete('/:id')
  async deleteCertificate(@Res() res, @Param('id') id) {
    const certificate = await this.certificateService.deleteCertificate(id);
    if (!certificate) throw new NotFoundException('Certificate does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Certificate Deleted Successfully',
      certificate,
    });
  }

  @Patch('/:id')
  async updateCertificate(
    @Res() res,
    @Body() updateCertificateDTO: UpdateCertificateDTO,
    @Param('id') id,
  ) {
    const certificate = await this.certificateService.updateCertificate(id, updateCertificateDTO);
    if (!certificate) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Certificate Updated Successfully',
      certificate,
    });
  }
}
