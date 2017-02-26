# Test View (vscode-test-view)
Quickly switch between a source file and its (unit) test file. Currently assumes both files are within the same directory.

## How to use
Press `cmd + shift + .` to switch between a code file and a test file

## Change keybindings
You can set your own keybindings like this:

`````javascript
{
    "command": "extension.testView.switch",
    "key": "ctrl+shift+.",
    "mac": "cmd+shift+."
}
`````

## Current Limitations / Roadmap

Feel free to make a pull request to fix one of the limitations. Ideally, open an issue to let me know you're working on it and close the issue with your commit/PR. Thanks :)

- not a single test has been written yet
    - [x] ~~add unit tests~~
    - [ ] add integration tests
- only matches to `/\.spec$/`
    - [ ] should be made configurable - currently being worked on by @etiennedi in [issue #1](i1)
- shows an error when file does not exist
    - [ ] the extension should create the file
- opens the new new file in the same place as the old file
    - [ ] optional support for split view would be nice
- there is no aweseome gif showcasing the extension
    - [ ] add an awesome gif ;)
- code file and test file must be in the same folder
    - [ ] not sure yet, probably needs a config for src and test folder and files must then have the same path. Open for ideas.

[i1]: https://github.com/etiennedi/vscode-test-view/issues/1
