export const getPercentage = (startDate, endDate) => {
  return Math.round(
    ((new Date() - new Date(startDate)) /
      (new Date(endDate) - new Date(startDate))) *
      100
  );
};
