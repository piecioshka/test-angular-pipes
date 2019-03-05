import { OnlyFirstPipe } from './only-first.pipe';

describe('OnlyFirstPipe', () => {
  let pipe: OnlyFirstPipe = null;

  beforeEach(() => {
    pipe = new OnlyFirstPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should reduce list of items', () => {
    const collection = ['foo', 'bar', 'baz'];
    const output = pipe.transform(collection);
    expect(output).toEqual([collection[0]]);
  });
});
