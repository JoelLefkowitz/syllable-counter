import * as path from "path";
import * as vscode from "vscode";
import countSyllables = require('syllable');

export class SyllableCounterProvider
  implements vscode.TreeDataProvider<SyllableTreeItem> {
  
  private textEditor : vscode.TextEditor | undefined
  private _onDidChangeTreeData: vscode.EventEmitter<SyllableTreeItem | undefined> = new vscode.EventEmitter<SyllableTreeItem | undefined>();
  readonly onDidChangeTreeData: vscode.Event<SyllableTreeItem | undefined> = this._onDidChangeTreeData.event;

  constructor() {
    this.textEditor = vscode.window.activeTextEditor 
  }

  getTreeItem(element: SyllableTreeItem): SyllableTreeItem {
    return element;
  }

  getChildren(element?: SyllableTreeItem): Thenable<SyllableTreeItem[]> {
    if (this.textEditor === undefined) {
      return Promise.resolve([]);
    }

    const document = this.textEditor.document;
    return Promise.resolve(
      [...Array(document.lineCount).keys()].map((i) =>
        SyllableTreeItem.factory(document.lineAt(i))
      )
    );
  }
  
  refresh(): void {
    this.textEditor = vscode.window.activeTextEditor 
    this._onDidChangeTreeData.fire();
  }
  
}

class SyllableTreeItem extends vscode.TreeItem {
  private constructor(public readonly label: string) {
    super(label, vscode.TreeItemCollapsibleState.None);
  }

  public static factory(textLine: vscode.TextLine): SyllableTreeItem {
    const lineNumber = (textLine.lineNumber + 1).toString();
    const syllablesCount = countSyllables(textLine.text);

    let lineText = textLine.text.trim();

    if (lineText.length > 30) {
      lineText = lineText.substring(0, 27) + "...";
    }

    const label = `Line ${lineNumber} = ${syllablesCount} ${
      syllablesCount == 1 ? "syllable" : "syllables"
    } - ${lineText}`;
    
    return new SyllableTreeItem(label);
  }

  iconPath = {
    light: path.join(__filename, "../../resources/light/string.svg"),
    dark: path.join(__filename, "../../resources/dark/string.svg"),
  };
}
