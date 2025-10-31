import { date } from "quasar";

type DateType = number | string;

export function FormatDateTime(datetime: DateType): DateType {
    return date.formatDate(datetime, "YYYY-MM-DD HH:mm:ss");
}

export function FormatDate(datetime: DateType): DateType {
    return date.formatDate(datetime, "YYYY-MM-DD");
}

export function FormatDateTimeShort(datetime: DateType): DateType {
    return date.formatDate(datetime, "YYYYMMDDHHmmss");
}
