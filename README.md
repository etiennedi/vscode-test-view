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
    - quite ironic for a package that helps with writing tests...
- only matches to `/\.spec$/`
    - should be made configurable
- shows an error when file does not exist
    - should create the file
- opens the new new file in the same place as the old file
    - optional support for split view would be nice
