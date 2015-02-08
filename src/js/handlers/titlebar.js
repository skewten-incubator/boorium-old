function attach_handlers(){
    attach_titlebar_buttons();
}

function attach_titlebar_buttons(){
    $("#titlebar .buttons .minimize").on("click", minimize_window);
    $("#titlebar .buttons .close").on("click", close_window);
}

function minimize_window(){
    win.minimize();
}

function close_window(){
    win.close();
}

exports.attach = attach_handlers;