# vscode-boilerplate-electron

A boilerplate project set up for writing and debugging electron applications.

## Environment

Visual Studio Code v1.6.0, Node v6, NPM v3.

## Instructions

1. Clone or fork the repository
2. Navigate to project root
3. Run `npm install` to install dependencies
5. Set break points in `src` files
6. Run debugger

## FAQ

**I get an error message running the debugger: Cannot launch debug target (spawn \<path-to-runtime-executable\> ENOENT).**

This is a side-effect of the boilerplate being developed on a Windows system, and the error should only occur if you're attempting to debug on any OS other than Windows. That is because Electron - which is installed as a development dependency - is spawned through `${workspaceRoot}/node_modules/.bin/electron.cmd`, a Windows command prompt script.

If you're using a Linux-based OS, use the script for your system by removing the `.cmd` extension.

  
