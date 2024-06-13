export function formatDate(date: Date) {
  // Get the UTC offset
  const offset = date.getTimezoneOffset();
  const offsetHours = Math.abs(Math.floor(offset / 60))
    .toString()
    .padStart(2, "0");
  const offsetMinutes = (offset % 60).toString().padStart(2, "0");
  const offsetSign = offset >= 0 ? "+" : "-";

  const dateString =
    date.toISOString().slice(0, 19) +
    offsetSign +
    offsetHours +
    ":" +
    offsetMinutes;

  return dateString;
}
