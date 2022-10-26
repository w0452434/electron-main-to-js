const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')
const url = ('url')


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
    let obj = fs.readdir(".\\music", (err, files) => {
    
        if (err)
          console.log(err);
        else {
          files.forEach(file => {
            tracks.push(file);
            var arraySongs = []
            arraySongs = path.parse(file)
            console.log(file)
          })
        }
      })

    const mainWindow = createWindow()

    mainWindow.webContents.once('dom-ready', () => {
        mainWindow.webContents.send('say-hello', tracks)
    });   

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) 
            createWindow()
    })
})




app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
