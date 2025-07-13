import "dayjs/locale/ja";

import dayjs from "dayjs";

dayjs.locale("ja");

export function displayDate(date: Date) {
  return dayjs(date).format("YYYY/MM/DD");
}
