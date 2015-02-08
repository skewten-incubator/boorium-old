function text(txt){
    $("#splash .sub").text(txt);
}

function load_boorium(){
    text("loading ui");
}

exports.load = load_boorium;