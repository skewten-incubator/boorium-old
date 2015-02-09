var md = false,
    drag = false,
    lock = false,
    c = {};

function attach_handlers(){
    var target = $(window);
    target.on("mousedown", mousedown);
    target.on("mouseup", mouseup);
    target.on("mousemove", mousemove);
}

function mousedown(e){
    md = true;
    c.y = e.screenY;
    c.x = e.screenX;
}

function mouseup(){
    md = false;
    drag = false;
    lock = false;
}

function mousemove(e){
    if (!md || lock) return;
    if (!drag){
        if (!$(e.target).hasClass("allow-drag")){
            lock = true;
            return;
        }
        drag = true;
        return;
    }

    var n = {
        y: e.screenY,
        x: e.screenX
    };
    
    if (W.MAXIMIZED){
        //TODO: This doesn't work. (https://github.com/nwjs/nw.js/issues/3066)

        //temporary workaround: only allow dragging when unmaximized.
        return;
        
        W.mr_toggle();
    }
    win.moveBy((n.x - c.x), (n.y - c.y));

    c.y = n.y;
    c.x = n.x;
    n = null;
}

exports.attach = attach_handlers;