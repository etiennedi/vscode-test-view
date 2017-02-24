'use strict';

import * as vscode from 'vscode';
import { parseFileName, switchFileName } from './fileName';
import { isTestFile } from './fileType'

export function activate(context: vscode.ExtensionContext) {

    const disposable = vscode.commands.registerCommand('extension.testView.switch', () => {

        // Get the current editor
        const activeEditor = vscode.window.activeTextEditor;

        // Abort if there is no editor available
        if (!activeEditor) {
            return vscode.window.showErrorMessage('No file selected. Select either a code file or a test file.');
        }

        // Get the file names
        const currentFileName = parseFileName(activeEditor.document.fileName);
        const targetFileName = switchFileName(currentFileName);

        // Open target file
        return vscode.workspace.openTextDocument(targetFileName.fullFileName).then(
            document => vscode.window.showTextDocument(document),
            () => vscode.window.showErrorMessage(`Target file ${targetFileName.basename} does not seem to exist.`)
        )
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}
