import { CarFilterPipe } from './car.filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CarFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
