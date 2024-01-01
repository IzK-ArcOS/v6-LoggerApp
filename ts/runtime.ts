import { AppRuntime } from "$ts/apps/runtime";
import { LogStore, collectLogsBySource } from "$ts/console";
import { Process } from "$ts/process";
import { Store } from "$ts/writable";
import type { App, AppMutator } from "$types/app";
import { LogItem } from "$types/console";

export class LoggerRuntime extends AppRuntime {
  public groups = Store(new Map<string, LogItem[]>([]));

  constructor(app: App, mutator: AppMutator, process: Process) {
    super(app, mutator, process);

    this.updateGroups();

    LogStore.subscribe(() => this.updateGroups())
  }

  public updateGroups() {
    //this.Log("Updating cached log groups", "updateGroups");

    const groupsStore = this.groups.get();
    const groups = collectLogsBySource();
    const entries = Object.entries(groups);

    for (const [source, items] of entries) {
      groupsStore.set(source, items);
    }

    this.groups.set(groupsStore);
  }
}