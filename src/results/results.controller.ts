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
import { ResultsService } from './results.service';
import { CreateResultsDTO, UpdateResultsDTO } from './dto/results.dto';

@Controller('results')
export class ResultsController {
    constructor(private resultsService: ResultsService) {}

  @Post()
  async createResults(@Res() res, @Body() createResultsDTO: CreateResultsDTO) {
    const results = await this.resultsService.createResults(createResultsDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Results Successfully Created',
      results,
    });
  }

  @Get()
  async getListOfResults(@Res() res) {
    const results = await this.resultsService.getListOfResults();
    return res.status(HttpStatus.OK).json(results);
  }

  @Get('/:id')
  async getResults(@Res() res, @Param('id') id) {
    const results = await this.resultsService.getResults(id);
    if (!results) throw new NotFoundException('Results does not exist!');
    return res.status(HttpStatus.OK).json(results);
  }

  @Delete('/:id')
  async deleteResults(@Res() res, @Param('id') id) {
    const results = await this.resultsService.deleteResults(id);
    if (!results) throw new NotFoundException('Results does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Results Deleted Successfully',
      results,
    });
  }

  @Patch('/:id')
  async updateResults(
    @Res() res,
    @Body() updateResultsDTO: UpdateResultsDTO,
    @Param('id') id,
  ) {
    const results = await this.resultsService.updateResults(id, updateResultsDTO);
    if (!results) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Results Updated Successfully',
      results,
    });
  }
}
