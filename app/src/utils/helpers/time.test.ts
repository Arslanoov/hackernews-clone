import { pluralize } from './time';

describe('time pluralize function', () => {
  it('works', () => {
    expect(pluralize(1, ' hour')).toBe('1 hour');
    expect(pluralize(2, ' day')).toBe('2 days');
    expect(pluralize(5, ' year')).toBe('5 years');
  });
});

describe('time format function', () => {});
