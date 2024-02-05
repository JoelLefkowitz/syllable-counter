import {
  Event,
  EventEmitter,
  TextDocument,
  TextEditor,
  TreeDataProvider as VScodeTreeDataProvider,
  window,
} from "vscode";

import { TreeItem } from "./TreeItem";
import { range } from "./arrays";
import { syllable } from "syllable";

export class TreeDataProvider implements VScodeTreeDataProvider<TreeItem> {
  emitter: EventEmitter<TreeItem | undefined> = new EventEmitter<
    TreeItem | undefined
  >();

  onDidChangeTreeData: Event<TreeItem | undefined> = this.emitter.event;

  editor: TextEditor | null;

  constructor() {
    this.editor = window.activeTextEditor ?? null;
  }

  static items(document: TextDocument): TreeItem[] {
    return range(document.lineCount).map((_, i) => {
      const { lineNumber, text } = document.lineAt(i);

      const trimmed = text.trim();

      const lineText =
        trimmed.length > 30 ? `${trimmed.substring(0, 27)}...` : trimmed;

      const count = syllable(text);
      const label = count === 1 ? "syllable" : "syllables";

      return new TreeItem(
        `Line ${lineNumber + 1} = ${count} ${label} - ${lineText}`,
      );
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getTreeItem(element: TreeItem): TreeItem {
    return element;
  }

  getChildren(_: TreeItem): Thenable<TreeItem[]> {
    return Promise.resolve(
      this.editor ? TreeDataProvider.items(this.editor.document) : [],
    );
  }

  refresh(): void {
    this.editor = window.activeTextEditor ?? null;
    this.emitter.fire();
  }
}
