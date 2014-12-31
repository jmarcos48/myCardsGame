function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function addPlayer() {
        if (4 == Alloy.Globals.activeTeamPlayers) alert("Solo se permite hasta 4 jugadores"); else {
            Alloy.Globals.activeTeamPlayers = Alloy.Globals.activeTeamPlayers + 1;
            3 == Alloy.Globals.activeTeamPlayers && ($.player03View.visible = true);
            4 == Alloy.Globals.activeTeamPlayers && ($.player04View.visible = true);
        }
    }
    function deletePlayer() {
        if (4 == Alloy.Globals.activeTeamPlayers) {
            $.player04View.visible = false;
            $.player04Name.value = "Jugador 4";
            Alloy.Globals.activeTeamPlayers = Alloy.Globals.activeTeamPlayers - 1;
        } else if (3 == Alloy.Globals.activeTeamPlayers) {
            $.player03View.visible = false;
            $.player03Name.value = "Jugador 3";
            Alloy.Globals.activeTeamPlayers = Alloy.Globals.activeTeamPlayers - 1;
        } else 2 == Alloy.Globals.activeTeamPlayers && alert("Se necesita tener un mínimo de 2 jugadores");
    }
    function play() {
        Alloy.Globals.player01Name = $.player01Name.value;
        Alloy.Globals.player02Name = $.player02Name.value;
        Alloy.Globals.player03Name = $.player03Name.value;
        Alloy.Globals.player04Name = $.player04Name.value;
        $.playersWindow.close();
        var playView = Alloy.createController("card").getView();
        playView.open();
    }
    function back() {
        $.playersWindow.close();
        var homeView = Alloy.createController("rulesTeam").getView();
        homeView.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "players";
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
    $.__views.playersWindow = Ti.UI.createWindow({
        id: "playersWindow",
        backgroundImage: "/images/background/players.jpg",
        backgroundColor: "#FBC9BA",
        barColor: "black"
    });
    $.__views.playersWindow && $.addTopLevelView($.__views.playersWindow);
    $.__views.player01View = Ti.UI.createView({
        id: "player01View",
        top: "80",
        width: "100%",
        height: "17%",
        backgroundImage: "/images/background/player.png"
    });
    $.__views.playersWindow.add($.__views.player01View);
    $.__views.player01Name = Ti.UI.createTextField({
        id: "player01Name",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: "25",
        left: "52",
        height: "35",
        width: "230",
        value: "Jugador 1"
    });
    $.__views.player01View.add($.__views.player01Name);
    $.__views.player02View = Ti.UI.createView({
        id: "player02View",
        top: "150",
        width: "100%",
        height: "17%",
        backgroundImage: "/images/background/player.png"
    });
    $.__views.playersWindow.add($.__views.player02View);
    $.__views.player02Name = Ti.UI.createTextField({
        id: "player02Name",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: "25",
        left: "52",
        height: "35",
        width: "230",
        value: "Jugador 2"
    });
    $.__views.player02View.add($.__views.player02Name);
    $.__views.player03View = Ti.UI.createView({
        id: "player03View",
        top: "220",
        width: "100%",
        height: "17%",
        backgroundImage: "/images/background/player.png",
        visible: "false"
    });
    $.__views.playersWindow.add($.__views.player03View);
    $.__views.player03Name = Ti.UI.createTextField({
        id: "player03Name",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: "25",
        left: "52",
        height: "35",
        width: "230",
        value: "Jugador 3"
    });
    $.__views.player03View.add($.__views.player03Name);
    $.__views.player04View = Ti.UI.createView({
        id: "player04View",
        top: "290",
        width: "100%",
        height: "17%",
        backgroundImage: "/images/background/player.png",
        visible: "false"
    });
    $.__views.playersWindow.add($.__views.player04View);
    $.__views.player04Name = Ti.UI.createTextField({
        id: "player04Name",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: "25",
        left: "52",
        height: "35",
        width: "230",
        value: "Jugador 4"
    });
    $.__views.player04View.add($.__views.player04Name);
    $.__views.addPlayerButton = Ti.UI.createButton({
        id: "addPlayerButton",
        width: "18%",
        height: "10%",
        top: "20",
        left: "0",
        backgroundImage: "/images/buttons/button_addplayer.png"
    });
    $.__views.playersWindow.add($.__views.addPlayerButton);
    addPlayer ? $.__views.addPlayerButton.addEventListener("click", addPlayer) : __defers["$.__views.addPlayerButton!click!addPlayer"] = true;
    $.__views.deletePlayerButton = Ti.UI.createButton({
        id: "deletePlayerButton",
        width: "18%",
        height: "10%",
        top: "20",
        left: "50",
        backgroundImage: "/images/buttons/button_deleteplayer.png"
    });
    $.__views.playersWindow.add($.__views.deletePlayerButton);
    deletePlayer ? $.__views.deletePlayerButton.addEventListener("click", deletePlayer) : __defers["$.__views.deletePlayerButton!click!deletePlayer"] = true;
    $.__views.backButton = Ti.UI.createButton({
        id: "backButton",
        width: "30%",
        height: "15%",
        bottom: "0",
        left: "1",
        backgroundImage: "/images/buttons/button_back.png"
    });
    $.__views.playersWindow.add($.__views.backButton);
    back ? $.__views.backButton.addEventListener("click", back) : __defers["$.__views.backButton!click!back"] = true;
    $.__views.playButton = Ti.UI.createButton({
        id: "playButton",
        width: "30%",
        height: "15%",
        bottom: "0",
        right: "1",
        backgroundImage: "/images/buttons/button_play.png"
    });
    $.__views.playersWindow.add($.__views.playButton);
    play ? $.__views.playButton.addEventListener("click", play) : __defers["$.__views.playButton!click!play"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.addPlayerButton!click!addPlayer"] && $.__views.addPlayerButton.addEventListener("click", addPlayer);
    __defers["$.__views.deletePlayerButton!click!deletePlayer"] && $.__views.deletePlayerButton.addEventListener("click", deletePlayer);
    __defers["$.__views.backButton!click!back"] && $.__views.backButton.addEventListener("click", back);
    __defers["$.__views.playButton!click!play"] && $.__views.playButton.addEventListener("click", play);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;