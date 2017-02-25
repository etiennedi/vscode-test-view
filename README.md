# vscode-test-view
Helpers to quickly switch between a code file and its test file.

## How to use
Press `cmd + shift + .` to switch between a code file and a test file

## Change keybindings
You can set your own keybindings like this:

`````javascript
{
    "command": "testView.launch",
    "key": "ctrl+shift+.",
    "mac": "cmd+shift+."
}
`````

## Current Limitations / Roadmap

Feel free to make a pull request to fix one of the Limitations
- not a single test has been written yet
    - [x] ~~add unit tests~~
    - [ ] add integration tests
- only matches to `/\.spec$/`
    - [ ] should be made configurable
- shows an error when file does not exist
    - [ ] the extension should create the file
- opens the new new file in the same place as the old file
    - [ ] optional support for split view would be nice
- there is no aweseome gif showcasing the extension
    - [ ] add an awesome gif ;)
- code file and test file must be in the same folder
    - [ ] not sure yet, probably needs a config for src and test folder and files must then have the same path. Open for ideas.
