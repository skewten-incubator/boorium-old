function attach_handlers(){
    //buttons
    $("#titlebar .buttons .minimize").on("click", W.minimize);
    $("#titlebar .buttons .close").on("click", W.close);
    $("#titlebar .buttons .maximize").on("click", maximize);
    $("#titlebar .buttons .restore").on("click", restore);
    $("#titlebar .buttons .fs").on("click", W.toggle_fullscreen);

    //double-click maximize/restore
    $("#titlebar, #titlebar .allow-drag").on("click", check_dc);
    
    //events
    win.on("maximize", check_maximized);
    win.on("unmaximize", check_maximized);

    //window dragging
    require("./drag").attach();
}

function maximize(){
    W.maximize();
    check_maximized();
}

function restore(){
    W.restore();
    check_maximized();
}

function check_maximized(){
    var target = $("#titlebar .buttons .mr");
    W.MAXIMIZED && target.addClass("max");
    !W.MAXIMIZED && target.removeClass("max");
}

var lastdc = 0;
function check_dc(e){
    if (e.target != e.currentTarget) return;
    
    var timing = Date.now() - lastdc;
    if (timing < 500){
        lastdc = 0;
        W.mr_toggle();
        return;
    }
    lastdc = Date.now();
}

exports.attach = attach_handlers;