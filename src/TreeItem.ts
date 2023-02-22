import { TreeItemCollapsibleState, TreeItem as VSCodeTreeItem } from "vscode";

import path from "path";

export class TreeItem extends VSCodeTreeItem {
  override iconPath = {
    light: path.resolve(__filename, "../../resources/light/string.svg"),
    dark: path.resolve(__filename, "../../resources/dark/string.svg"),
  };

  constructor(public override readonly label: string) {
    super(label, TreeItemCollapsibleState.None);
  }
}
