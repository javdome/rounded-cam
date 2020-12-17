const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 350,
    height: 263,
    // resizable:true,
    alwaysOnTop: true,
    maximizable:false,
    frame: false,
    transparent: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  //Always on top even in full screen apps (like powerpoint presentation)
  win.setAlwaysOnTop(true, "screen-saver");


  win.loadFile('src/index.html');
  win.setAutoHideMenuBar(true);
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