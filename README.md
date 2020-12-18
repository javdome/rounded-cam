# Description
Based on [AlwaysOnTopCamCorder](https://github.com/garbageoverflow/AlwaysOnTopCamCorder).

This is a simple electron app that always sits on top of other windows, that displays what the webcam sees, and you can move around the screen.

The "Always On Top" feature works even in full screen apps (like a powerpoint presentation).
The webcam view is a bit rounded (more like a Loom style) and stylish with a border.

<img src="https://user-images.githubusercontent.com/36993404/102607285-52e26c80-4128-11eb-8bad-e2c887e35639.JPG" width="50%">

## Install and run 

``` javascript
npm install

npm start
```

## Build
You can create a build (executable without npm). Just follow the basic instructions of Electron:

1. Import Electron Forge to your app folder:
``` javascript
npx @electron-forge/cli import
```

2. Create a distributable:
``` javascript
npm run make
```

Electron-forge creates the out folder where your package will be located.