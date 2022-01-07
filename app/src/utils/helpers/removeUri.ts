export const removeUriFromUrl = (url: string): string => {
  try {
    const matches = url.match(/^(https?:\/\/[^/?#]+)(?:[/?#]|$)/i);
    return (matches && matches[1]) ?? '';
  } catch (_) {
    return '';
  }
};
