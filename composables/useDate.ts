export const useDate = (dateString?: string | Date) => {
  if (!dateString) return "";
  if (dateString instanceof Date) return dateString;

  return new Date(dateString);
};
