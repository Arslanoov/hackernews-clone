import { pluralize, formatTime } from 'utils/helpers/time';

describe('time pluralize function', () => {
  it('works', () => {
    expect(pluralize(1, ' hour')).toBe('1 hour');
    expect(pluralize(2, ' day')).toBe('2 days');
    expect(pluralize(5, ' year')).toBe('5 years');
  });
});

describe('time format function', () => {
  it('works', () => {
    expect(formatTime(1641811874, 1642175474_000)).toBe('4 days ago');
    expect(formatTime(1642146711, 1642175474_000)).toBe('7 hours ago');
    expect(formatTime(1641379919, 1642175474_000)).toBe('9 days ago');
  });
});
