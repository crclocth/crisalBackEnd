import { Test, TestingModule } from '@nestjs/testing';
import { AppointCompanyController } from './appoint-company.controller';

describe('AppointCompanyController', () => {
  let controller: AppointCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointCompanyController],
    }).compile();

    controller = module.get<AppointCompanyController>(AppointCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
