import { activate, deactivate } from './extension';

import * as vscode from '../vscodeMock';

const fakeContext = {
    subscriptions: []
}


describe('foo', () => {
    it('should register the extension with the correct name', () => {
        activate(<any>fakeContext);
        expect(
            vscode.commands.registerCommand
        ).toHaveBeenCalledWith('extension.testView.switch', jasmine.any(Function))
    });

    it('should show an error', () => {
        vscode.window.activeTextEditor = null;
        vscode.window.showErrorMessage = jest.fn();

        activate(<any>fakeContext);
        const registerHook = vscode.commands.registerCommand.mock.calls[0][1]
        registerHook();
        expect(
            vscode.window.showErrorMessage
            ).toHaveBeenLastCalledWith(jasmine.any(String));
    })
})
