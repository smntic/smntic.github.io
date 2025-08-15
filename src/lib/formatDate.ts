export const formatDateLong = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

export const formatTimeSpan = (start: Date, end: Date): string => {
  const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long' });

  const startMonth = monthFormatter.format(start);
  const startYear = start.getFullYear();

  const endMonth = monthFormatter.format(end);
  const endYear = end.getFullYear();

  const enDash = '\u2013';

  if (startMonth === endMonth && startYear === endYear) {
    return `${startMonth} ${startYear}`;
  }

  if (startYear === endYear) {
    return `${startMonth} ${enDash} ${endMonth} ${startYear}`;
  }

  return `${startMonth} ${startYear} ${enDash} ${endMonth} ${endYear}`;
};
