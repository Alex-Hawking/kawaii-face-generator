const { app, BrowserWindow } = require('electron')

const ipc = require('electron').ipcMain;

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 400,
        height: 200,
        backgroundColor: 'white',
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });
    // and load the index.html of the app.
    win.loadFile('./index.html');
    //Disable Resizing
    win.resizable = false;
    // Open the DevTools.
    //win.webContents.openDevTools();
    //Show Window
    ipc.on('show', (event, args) => {
        win.show()
        win.focus()
    });
    ipc.on('hide', (event, args) => {
        win.hide()
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
    //Quit when receives quit message from renderer
ipc.on('quit', (event, args) => {
    app.quit();
});