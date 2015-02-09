global.win = window.nwDispatcher.requireNwGui().Window.get();

function text(txt){
    $("#splash .sub").text(txt);
}

function load_boorium(){
    text("loading ui");
    require("../handlers").attach();
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

exports.load = load_boorium;