const { app, BrowserWindow } = require("electron");
const { sum } = require("./modules/sum.js");

app.on("ready", () => {
    let window = new BrowserWindow({ width: 800, height: 600 });
    window.loadURL(`file://${__dirname}/index.html`);
    let result = sum(1, 2);
    console.log(result);
});

app.on("window-all-closed", () => {
    app.quit();
});
