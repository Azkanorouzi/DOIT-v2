import { DateTime } from "luxon";

export function getNowIso() {
  return DateTime.now().endOf("day").toISO();
}
