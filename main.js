const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 250,
    height: 250,
    // resizable:true,
    alwaysOnTop: true,
    maximizable:false,
    frame: false,
    transparent: true,
    autoHideMenuBar: true,
    icon: __dirname +'/rounded-cam-icon.ico',
    webPreferences: {
      nodeIntegration: true
    }
  });

  //Always on top even in full screen apps (like powerpoint presentation)
  win.setAlwaysOnTop(true, "screen-saver");


  win.loadFile('src/index.html');
  win.setAutoHideMenuBar(true);

    // Emitted when the window is closed.
    win.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})