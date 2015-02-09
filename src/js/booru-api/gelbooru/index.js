var request = require("request"),
    xml2js = require("xml2js");

var Gelbooru = new (function(){
    var self = this;

    self.query = function(obj, callback){
        request({
            url: "http://gelbooru.com/index.php",
            qs: {
                limit: obj.limit || 100,
                pid: obj.page || 0,
                page: "dapi",
                s: "post",
                q: "index",
                tags: obj.tags || ""
            }
        }, function(err, response, body){
            if (err || response.statusCode != 200){
                window.alert("gelbooru: query failed");
                setTimeout(function(){callback(false)});
            }

            xml2js.parseString(body, function(err, result){
                if (err){
                    window.alert("gelbooru: xml parse failed");
                }
                setTimeout(function(){callback(result)});
            });
        });
    }
})();

module.exports = Gelbooru;