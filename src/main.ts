import { ExtensionContext, commands, window } from "vscode";

import { TreeDataProvider } from "./TreeDataProvider";

export const activate = (_: ExtensionContext): void => {
  const provider = new TreeDataProvider();

  window.registerTreeDataProvider("syllableCounter", provider);

  commands.registerCommand("syllableCounter.refreshEntry", () =>
    provider.refresh()
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const deactivate = (): void => {};
