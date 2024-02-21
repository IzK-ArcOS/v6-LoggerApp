import { ErrorIcon, InfoIcon, WarningIcon } from "$ts/images/dialog";
import { BugReportIcon } from "$ts/images/general";
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
  [LogLevel.critical]: BugReportIcon,
  [LogLevel.error]: ErrorIcon,
  [LogLevel.warn]: WarningIcon,
  [LogLevel.info]: InfoIcon,
};
