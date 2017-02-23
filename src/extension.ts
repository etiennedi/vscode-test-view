const config = {
    appendTestExtension: '.spec',
}


'use strict';
import * as vscode from 'vscode';
import { parseFileName } from './fileName';
import { isTestFile } from './fileType'

export function activate(context: vscode.ExtensionContext) {


    let disposable = vscode.commands.registerCommand('testView.launch', () => {

try {

        // Get the current editor
        const activeEditor = vscode.window.activeTextEditor;

        // Abort if there is no editor available 
        if(!activeEditor) {
            vscode.window.showErrorMessage('No file selected. Select either a code file or a test file.');
            return;
        }

        // Get the current file name
        const currentFileName = parseFileName(activeEditor.document.fileName);
        const targetFileName = switchFileName(currentFileName);
        


} catch (error) {
    console.log(error)
}

    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}