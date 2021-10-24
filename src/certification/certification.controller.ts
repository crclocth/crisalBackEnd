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
import { CertificationService } from './certification.service';
import {
  CreateCertificationDTO,
  UpdateCertificationDTO,
} from './dto/certification.dto';

@Controller('certification')
export class CertificationController {
  constructor(private certificationService: CertificationService) {}

  @Post()
  async createCertification(
    @Res() res,
    @Body() createCertificationDTO: CreateCertificationDTO,
  ) {
    const certification = await this.certificationService.createCertification(
      createCertificationDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Certification Successfully Created',
      certification,
    });
  }

  @Get()
  async getCertifications(@Res() res) {
    const certification = await this.certificationService.getCertifications();
    return res.status(HttpStatus.OK).json(certification);
  }

  @Get('/:id')
  async getCertification(@Res() res, @Param('id') id) {
    const certification = await this.certificationService.getCertification(id);
    if (!certification)
      throw new NotFoundException('Certification does not exist!');
    return res.status(HttpStatus.OK).json(certification);
  }

  @Delete('/:id')
  async deleteCertification(@Res() res, @Param('id') id) {
    const certification = await this.certificationService.deleteCertification(
      id,
    );
    if (!certification)
      throw new NotFoundException('Certification does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Certification Deleted Successfully',
      certification,
    });
  }

  @Patch('/:id')
  async updateCertification(
    @Res() res,
    @Body() updateCertificationDTO: UpdateCertificationDTO,
    @Param('id') id,
  ) {
    const certification = await this.certificationService.updateCertification(
      id,
      updateCertificationDTO,
    );
    if (!certification) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Certification Updated Successfully',
      certification,
    });
  }
}
