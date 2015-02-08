//Check if we're running in development mode
(function(){
    process.env.BOORIUM_DEV && require('nw.gui').Window.get().showDevTools();
})();

//Change the current working dir to the JS dir.
(function(){
    var __dirname = process.mainModule.exports.__dirname;
    process.chdir(__dirname);
    console.log("cwd -> "+process.cwd());
})();

//Globalize jQuery.
global.$ = $;

//Load the... loader.
require("./loader").load();