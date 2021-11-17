import { Test, TestingModule } from '@nestjs/testing';
import { AppointCompanyService } from './appoint-company.service';

describe('AppointCompanyService', () => {
  let service: AppointCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointCompanyService],
    }).compile();

    service = module.get<AppointCompanyService>(AppointCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
