const SECONDS_IN_DAY = 86400;
const SECONDS_IN_HOUR = 3600;

export const pluralize = (time: number, label: string) =>
  time === 1 ? time + label : `${time + label}s`;

export const formatTime = (time: number, now: number = Date.now()) => {
  const between = now / 1000 - time;

  if (between < SECONDS_IN_HOUR) {
    return `${pluralize(~~(between / 60), ' minute')} ago`;
  }

  if (between < SECONDS_IN_DAY) {
    return `${pluralize(~~(between / 3600), ' hour')} ago`;
  }

  return `${pluralize(~~(between / 86400), ' day')} ago`;
};
