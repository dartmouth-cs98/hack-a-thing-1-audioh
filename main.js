const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow

require('electron-reload')(__dirname + '/index.html', {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  process.env.NODE_ENV !== 'production' && mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})