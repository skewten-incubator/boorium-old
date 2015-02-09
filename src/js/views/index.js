var W = new (function(){
    var self = this;
    self.Titlebar = require("./titlebar");

    self.minimize = function(){
        win.minimize();
    }
    self.close = function(){
        win.close();
    }

    self.MAXIMIZED = true;
    self.set_maximized = function(max){
        self.MAXIMIZED = max;
    }
    self.maximize = function(){
        win.maximize();
        self.set_maximized(true);
    }
    self.restore = function(){
        win.unmaximize();
        self.set_maximized(false);
    }
    self.mr_toggle = function(){
        if (self.MAXIMIZED)
            self.restore();
        else
            self.maximize();
    }

    self.toggle_fullscreen = function(){
        win.toggleFullscreen();
    }

    win.on("maximize", function(){
        self.set_maximized(true);
    });
    win.on("unmaximize", function(){
        self.set_maximized(false);
    });

    self.init = function(){
        self.Titlebar.attach();
    }
})();

module.exports = W;