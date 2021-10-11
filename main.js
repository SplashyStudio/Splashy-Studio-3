const {app, BrowserWindow} = require('electron');
function createWindow() {
    const win = new BrowserWindow({width: 1300, height: 725, minWidth: 1300, minHeight: 725, icon: 'ss3Icon.png', webPreferences: {nodeIntegration: true, devTools: false}});
    win.loadFile("startup.html");
    win.setMenuBarVisibility(false);
    win.setResizable(false);
}
app.whenReady().then(createWindow);