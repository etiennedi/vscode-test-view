export const commands = {
    registerCommand: jest.fn(),
}

export const context = {
    subscriptions: [],
}

export const window = {
    activeTextEditor: null,
    showErrorMessage: null,
    showTextDocument: null,
}

export const workspace = {
    openTextDocument: null,
    getConfiguration: jest.fn().mockReturnValue({
        get: jest.fn().mockReturnValue(['foo', 'bar'])
    }),
}
