import { activate, deactivate } from './extension';

import * as vscode from '../vscodeMock';

const fakeContext = {
    subscriptions: []
}

describe('activate', () => {
    it('should register the extension with the correct name', () => {
        activate(<any>fakeContext);
        expect(
            vscode.commands.registerCommand
        ).toHaveBeenCalledWith('extension.testView.switch', jasmine.any(Function))
    });

    describe('without an editor ', () => {
        let registerHook;

        beforeEach(() => {
            vscode.window.activeTextEditor = null;
            vscode.window.showErrorMessage = jest.fn().mockReturnValue('return');
            activate(<any>fakeContext);
            registerHook = vscode.commands.registerCommand.mock.calls[0][1]
        })

        it('should show an error', () => {
            registerHook();
            expect(
                vscode.window.showErrorMessage
            ).toHaveBeenLastCalledWith(jasmine.any(String));
        })

        it('should return immediately', () => {
            expect(
                registerHook()
            ).toEqual('return')
        })
    })

    describe('with an active editor', () => {
        let registerHook;

        beforeEach(() => {
            vscode.window.activeTextEditor = {
                document: {
                    fileName: 'mockedFileName'
                }
            };
            vscode.window.showErrorMessage = jest.fn().mockReturnValue('return');
            activate(<any>fakeContext);
            registerHook = vscode.commands.registerCommand.mock.calls[0][1]
        })

        it('should open the file and and call window.showDocument on it ', () => {
            vscode.workspace.openTextDocument = jest.fn().mockReturnValue(Promise.resolve('mockDocument'));
            vscode.window.showTextDocument = jest.fn().mockReturnValue(Promise.resolve());
            return registerHook().then(() => {
                expect(vscode.window.showTextDocument)
                    .toHaveBeenLastCalledWith('mockDocument')
            });
        });

        it('show an error when the file could not be opened', () => {
            vscode.workspace.openTextDocument = jest.fn().mockReturnValue(Promise.reject('error'));
            return registerHook().then(() => {
                expect(vscode.window.showErrorMessage)
                    .toHaveBeenLastCalledWith(jasmine.any(String))
            });
        })

    });
})

describe('deactivate', ()=> {
    it('should do nothing', ()=> {
        expect(deactivate()).toBe(undefined)
    })
})
