const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')
let tracks = []

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
          }
    })

    win.loadFile('index.html')

    return win
}

app.whenReady().then(() => {
    const mainWindow = createWindow()

    mainWindow.webContents.once('dom-ready', () => {
        mainWindow.webContents.send('say-hello', tracks)
    });   

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) 
            createWindow()
    })
})

fs.readdir("C:\\Users\\Computer\\Desktop\\Year2\\SpecialTopics\\a2repo\\electron-main-to-js\\music", (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("\nCurrent directory filenames:");
      files.forEach(file => {
        tracks.push(file);
        var arraySongs = []
        arraySongs = file
        console.log(file)
        console.log(arraySongs)
      })
    }
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
