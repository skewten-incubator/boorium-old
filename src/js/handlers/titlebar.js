function attach_handlers(){
    attach_titlebar_buttons();
}

function attach_titlebar_buttons(){
    $("#titlebar .buttons .minimize").on("click", minimize_window);
    $("#titlebar .buttons .close").on("click", close_window);
    $("#titlebar .buttons .maximize").on("click", maximize_window);
    $("#titlebar .buttons .restore").on("click", restore_window);
    $("#titlebar .buttons .fs").on("click", toggle_fullscreen);
    win.on("maximize", function(){set_maximized(true)});
    win.on("unmaximize", function(){set_maximized(false)});
}

function minimize_window(){
    win.minimize();
}

function close_window(){
    win.close();
}

var maximized = true;
function set_maximized(max){
    maximized = max;
    var target = $("#titlebar .buttons .mr");
    maximized && target.addClass("max");
    !maximized && target.removeClass("max");
}

function maximize_window(){
    win.maximize();
    set_maximized(true);
}

function restore_window(){
    win.unmaximize();
    set_maximized(false);
}

function toggle_fullscreen(){
    win.toggleFullscreen();
}

exports.attach = attach_handlers;