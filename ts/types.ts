import { LogItem, LogLevel } from "$types/console";
import { ReadableStore } from "$types/writable";

export type FilterLevel = LogLevel | "all";
export type GroupedBySource = Map<string, LogItem[]>;
export type CurrentSource = ReadableStore<string>;
