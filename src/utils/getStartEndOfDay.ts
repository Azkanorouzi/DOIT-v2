import { DateTime } from "luxon";

export function getStartEndOfTheDay() {
  const startOfDay = DateTime.now().startOf("day").toISO();
  const endOfDay = DateTime.now().endOf("day").toISO();

  return { startOfDay, endOfDay };
}
