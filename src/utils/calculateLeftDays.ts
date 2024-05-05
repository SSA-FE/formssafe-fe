export const calculateLeftDays = (endDayTimeStampStr: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const endDayTimestamp = new Date(endDayTimeStampStr);
  const timeDiff = endDayTimestamp.getTime() - today.getTime();
  const leftDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return leftDays;
};
