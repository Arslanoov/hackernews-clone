import { removeUriFromUrl } from 'utils/helpers/removeUri';

describe('removeUri function', () => {
  it('removes uri from url', () => {
    expect(removeUriFromUrl('http://github.com/euhgieghevoi')).toBe(
      'http://github.com'
    );
    expect(removeUriFromUrl('https://google.com/someuri')).toBe(
      'https://google.com'
    );
  });

  it('returns empty string on error', () => {
    expect(removeUriFromUrl('not_url_at_all')).toBe('');
  });
});
