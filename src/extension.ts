import * as vscode from 'vscode';

import { SyllableCounterProvider } from "./syllableCounter"

export function activate(context: vscode.ExtensionContext) {
	vscode.window.createTreeView('syllableCounter', {
		treeDataProvider: new SyllableCounterProvider(vscode.window.activeTextEditor)
	  });
}

export function deactivate() {}
