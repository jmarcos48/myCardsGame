function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goToPLayers() {
        stopAudio();
        var playersView = Alloy.createController("rulesTeam").getView();
        playersView.open();
    }
    function goToSinglePlayer() {
        var playersView = Alloy.createController("rulesSingle").getView();
        playersView.open();
        stopAudio();
    }
    function playAudio() {
        if (Alloy.Globals.audioEnabled) {
            player.setLooping(true);
            player.play();
        }
    }
    function stopAudio() {
        Alloy.Globals.audioEnabled && player.stop();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.welcomeWindow = Ti.UI.createWindow({
        id: "welcomeWindow"
    });
    $.__views.welcomeWindow && $.addTopLevelView($.__views.welcomeWindow);
    $.__views.playSingleButton = Ti.UI.createButton({
        id: "playSingleButton",
        backgroundImage: "/images/buttons/button_playSingle.png",
        bottom: "145",
        left: "15",
        width: "40%",
        height: "25%"
    });
    $.__views.welcomeWindow.add($.__views.playSingleButton);
    goToSinglePlayer ? $.__views.playSingleButton.addEventListener("click", goToSinglePlayer) : __defers["$.__views.playSingleButton!click!goToSinglePlayer"] = true;
    $.__views.playTeamButton = Ti.UI.createButton({
        id: "playTeamButton",
        backgroundImage: "/images/buttons/button_playTeam.png",
        bottom: "145",
        right: "15",
        width: "40%",
        height: "25%"
    });
    $.__views.welcomeWindow.add($.__views.playTeamButton);
    goToPLayers ? $.__views.playTeamButton.addEventListener("click", goToPLayers) : __defers["$.__views.playTeamButton!click!goToPLayers"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.resetVariables();
    Alloy.Globals.verifyDataBase();
    $.welcomeWindow.backgroundImage = "AR" == Alloy.Globals.subsidiaryCode ? "/images/background/AR/play.png" : "/images/background/MX/play.jpg";
    $.welcomeWindow.open();
    var player = Ti.Media.createSound({
        url: "/audios/welcome.mp3"
    });
    playAudio();
    __defers["$.__views.playSingleButton!click!goToSinglePlayer"] && $.__views.playSingleButton.addEventListener("click", goToSinglePlayer);
    __defers["$.__views.playTeamButton!click!goToPLayers"] && $.__views.playTeamButton.addEventListener("click", goToPLayers);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;