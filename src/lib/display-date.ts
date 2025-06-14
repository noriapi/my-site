import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

export function displayDate(date: Date) {
  return dayjs(date).format("YYYY/MM/DD");
}
