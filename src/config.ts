import * as vscode from 'vscode'

export const testFileIdentifiers: string[] =
   <string[]>vscode.workspace.getConfiguration('testView')
        .get('listOfTestFileIdentifiers');