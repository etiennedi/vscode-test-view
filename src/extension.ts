'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {


    let disposable = vscode.commands.registerCommand('testView.launch', () => {

        // Get the current editor
        const activeEditor = vscode.window.activeTextEditor;

        // Abort if there is no editor available 
        if(!activeEditor) {
            vscode.window.showErrorMessage('No file selected. Select either a code file or a test file.');
            return;
        }

        // Get the current file name
        const currentFileName = activeEditor.document.fileName;

        vscode.window.showInformationMessage(`Current File Name is ${currentFileName}`);

    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}