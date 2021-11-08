import { Test, TestingModule } from '@nestjs/testing';
import { PhysiologicalService } from './physiological.service';

describe('PhysiologicalService', () => {
  let service: PhysiologicalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhysiologicalService],
    }).compile();

    service = module.get<PhysiologicalService>(PhysiologicalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
