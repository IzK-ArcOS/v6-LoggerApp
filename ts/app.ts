import { LoggerIcon } from "$ts/images/apps";
import { HelpArticles } from "$ts/stores/articles";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { LoggerRuntime } from "./runtime";

export const LoggerApp: App = {
  metadata: {
    name: "Logging",
    description: "View ArcOS Logs",
    author: "The ArcOS Team",
    version: "2.0.0",
    icon: LoggerIcon,
    appGroup: "systemTools",
  },
  runtime: LoggerRuntime,
  content: AppSvelte,
  id: "LoggerApp",
  size: { w: 1000, h: 600 },
  minSize: { w: 1000, h: 600 },
  maxSize: { w: 1300, h: 900 },
  pos: { x: 200, y: 60 },
  state: {
    minimized: false,
    maximized: false,
    headless: true,
    fullscreen: false,
    resizable: true,
  },
  controls: {
    minimize: true,
    maximize: true,
    close: true,
  },
  glass: true,
  elevated: true,
  helpArticle: HelpArticles.logging,
};
