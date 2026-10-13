export default function yearFormat(startDate: string, endDate: string | undefined): string {
  const startYear = new Date(startDate).getFullYear();
  const endYear = endDate != null ? new Date(endDate).getFullYear() : "Present";
  const years = `${startYear} - ${endYear}`;
  return years;
}
