import { removeUriFromUrl } from './removeUri';

describe('removeUri function', () => {
  it('removes uri from url', () => {
    expect(removeUriFromUrl('http://github.com/euhgieghevoi')).toBe(
      'http://github.com'
    );
    expect(removeUriFromUrl('https://google.com/someuri')).toBe(
      'https://google.com'
    );
    expect(removeUriFromUrl('not_url_at_all')).toBe('');
  });
});
