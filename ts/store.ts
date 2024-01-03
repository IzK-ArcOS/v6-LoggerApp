import { LogLevel } from "$types/console";
import { FilterLevel } from "./types";

export const FilterLevels: FilterLevel[] = [
  LogLevel.info,
  LogLevel.warn,
  LogLevel.error,
  LogLevel.critical,
];

export const FilterCaptions: Map<"all" | LogLevel, string> = new Map([
  [LogLevel.info, "Info"],
  [LogLevel.warn, "Warning"],
  [LogLevel.error, "Error"],
  [LogLevel.critical, "Critical"],
]);

export const LogItemIcons: Record<LogLevel, string> = {
  [LogLevel.critical]: "report",
  [LogLevel.error]: "error",
  [LogLevel.warn]: "warning",
  [LogLevel.info]: "info",
}