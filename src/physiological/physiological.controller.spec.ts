import { Test, TestingModule } from '@nestjs/testing';
import { PhysiologicalController } from './physiological.controller';

describe('PhysiologicalController', () => {
  let controller: PhysiologicalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhysiologicalController],
    }).compile();

    controller = module.get<PhysiologicalController>(PhysiologicalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
