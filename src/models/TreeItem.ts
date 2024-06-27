import path from "path";
import { TreeItemCollapsibleState, TreeItem as VSCodeTreeItem } from "vscode";

export class TreeItem extends VSCodeTreeItem {
  override iconPath = {
    light: path.join(__filename, "../../assets/light/string.svg"),
    dark: path.join(__filename, "../../assets/dark/string.svg"),
  };

  constructor(public override readonly label: string) {
    super(label, TreeItemCollapsibleState.None);
  }
}
