import { LoggerIcon } from "$ts/images/apps";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { LoggerRuntime } from "./runtime";

export const LoggerApp: App = {
  metadata: {
    name: "Logging",
    description: "View ArcOS Logs",
    author: "The ArcOS Team",
    version: "2.0.0",
    icon: LoggerIcon
  },
  runtime: LoggerRuntime,
  content: AppSvelte,
  id: "LoggerApp",
  size: { w: 1000, h: NaN },
  minSize: { w: 1000, h: 600 },
  maxSize: { w: 1000, h: 610 },
  pos: { x: 200, y: 60 },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: false
  },
  controls: {
    minimize: true,
    maximize: false,
    close: true
  }
}