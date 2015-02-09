global.win = window.nwDispatcher.requireNwGui().Window.get();

function text(txt){
    $("#splash .sub").text(txt);
}

function load_boorium(){
    text("loading modules");
    load_modules();
    text("loading libraries");
    load_libraries();

    text("loading ui");
    setTimeout(show_main, 500);
}

function show_main(){
    win.hide();
    $("#splash").hide();
    $("#main").show();
    win.width = 500;
    win.height = 500;
    win.maximize();
    win.show();
}

function load_modules(){
    var libraries = [
        "request",
        "mkdirp",
        "xml2js"
    ];

    libraries.forEach(function(e){
        try{
            require(e);
        }
        catch(err){
            window.alert("Could not load node.js library: '"+e+"'!");
            win.close(true);
        }
    });
}

function load_libraries(){
    //Booru API
    global.BAP = require("../booru-api");
    //View manager
    global.W = require("../views");
    W.init(); //attach the handlers for the initial views
}

exports.load = load_boorium;