import { SyllableCounterProvider } from "./syllableCounter";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const treeDataProvider = new SyllableCounterProvider();

  vscode.window.registerTreeDataProvider("syllableCounter", treeDataProvider);

  vscode.commands.registerCommand("syllableCounter.refreshEntry", () =>
    treeDataProvider.refresh()
  );
}

export function deactivate() {}
