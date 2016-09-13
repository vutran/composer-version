import utils from '../utils';

describe('utils', () => {
  it('should get the next major version', () => {
    expect(utils.getNextVersion('1.0.0', 'major')).toEqual('2.0.0');
  });

  it('should get the next minor version', () => {
    expect(utils.getNextVersion('1.0.0', 'minor')).toEqual('1.1.0');
  });

  it('should get the next patch version', () => {
    expect(utils.getNextVersion('1.0.0', 'patch')).toEqual('1.0.1');
  });

  it('should throw an error', () => {
    expect(() => utils.getNextVersion('1.0.0')).toThrow();
  });
});
