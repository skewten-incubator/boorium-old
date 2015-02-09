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

    $("#titlebar, #titlebar .allow-drag").on("click", check_dc);
    require("./titlebar-drag").attach();
}

function minimize_window(){
    win.minimize();
}

function close_window(){
    win.close();
}

GLOBAL.WINDOW_MAXIMIZED = true;
function set_maximized(max){
    WINDOW_MAXIMIZED = max;
    var target = $("#titlebar .buttons .mr");
    WINDOW_MAXIMIZED && target.addClass("max");
    !WINDOW_MAXIMIZED && target.removeClass("max");
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

function toggle_mr(){
    if (WINDOW_MAXIMIZED) restore_window();
    else maximize_window();
}

var lastdc = 0;
function check_dc(e){
    if (e.target != e.currentTarget) return;
    var timing = Date.now() - lastdc;
    if (timing < 500){
        lastdc = 0;
        setTimeout(toggle_mr);
        return;
    }
    lastdc = Date.now();
}

exports.attach = attach_handlers;
exports.toggle_mr = toggle_mr;