function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function playAgain() {
        $.board.close();
        var playersView = Alloy.createController("index").getView();
        playersView.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "winnersboard";
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
    $.__views.board = Ti.UI.createWindow({
        id: "board",
        backgroundImage: "/images/background/general.jpg"
    });
    $.__views.board && $.addTopLevelView($.__views.board);
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/background/congratulations.png",
        top: "0"
    });
    $.__views.board.add($.__views.image);
    $.__views.winner01 = Ti.UI.createView({
        id: "winner01",
        layout: "vertical",
        top: "150",
        backgroundImage: "/images/background/winner_row.png",
        width: "100%",
        height: "15%"
    });
    $.__views.board.add($.__views.winner01);
    $.__views.winner02 = Ti.UI.createView({
        id: "winner02",
        layout: "vertical",
        top: "240",
        backgroundImage: "/images/background/winner_row.png",
        width: "100%",
        height: "15%"
    });
    $.__views.board.add($.__views.winner02);
    $.__views.winner03 = Ti.UI.createView({
        id: "winner03",
        layout: "vertical",
        top: "320",
        backgroundImage: "/images/background/winner_row.png",
        width: "100%",
        height: "15%",
        visible: "false"
    });
    $.__views.board.add($.__views.winner03);
    $.__views.winner04 = Ti.UI.createView({
        id: "winner04",
        layout: "vertical",
        top: "390",
        backgroundImage: "/images/background/winner_row.png",
        width: "100%",
        height: "15%",
        visible: "false"
    });
    $.__views.board.add($.__views.winner04);
    $.__views.playAgain = Ti.UI.createButton({
        id: "playAgain",
        backgroundImage: "/images/buttons/button_playAgain.png",
        bottom: "0",
        right: "10",
        width: "160px",
        height: "160px"
    });
    $.__views.board.add($.__views.playAgain);
    playAgain ? $.__views.playAgain.addEventListener("click", playAgain) : __defers["$.__views.playAgain!click!playAgain"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var fontSizePoints = 20;
    var topForPoints = "2";
    fontSizePoints = 18;
    topForPoints = "0";
    var winner01Name = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 36
        },
        fontFamily: "Lucida Grande-Bold",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: Alloy.Globals.player01Name,
        left: "5"
    });
    var winner01Points = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: fontSizePoints
        },
        fontFamily: "Lucida Grande-Bold",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: Alloy.Globals.player01CorrectAnswers + " puntos",
        left: "5",
        top: topForPoints
    });
    $.winner01.add(winner01Name);
    $.winner01.add(winner01Points);
    var winner02Name = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 36
        },
        fontFamily: "Lucida Grande-Bold",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: Alloy.Globals.player02Name,
        left: "5"
    });
    var winner02Points = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: fontSizePoints
        },
        fontFamily: "Lucida Grande-Bold",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: Alloy.Globals.player02CorrectAnswers + " puntos",
        left: "5",
        top: topForPoints
    });
    $.winner02.add(winner02Name);
    $.winner02.add(winner02Points);
    var winner03Name = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 36
        },
        fontFamily: "Lucida Grande-Bold",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: Alloy.Globals.player03Name,
        left: "5"
    });
    var winner03Points = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: fontSizePoints
        },
        fontFamily: "Lucida Grande-Bold",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: Alloy.Globals.player03CorrectAnswers + " puntos",
        left: "5",
        top: topForPoints
    });
    $.winner03.add(winner03Name);
    $.winner03.add(winner03Points);
    var winner04Name = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: 36
        },
        fontFamily: "Lucida Grande-Bold",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: Alloy.Globals.player04Name,
        left: "5"
    });
    var winner04Points = Ti.UI.createLabel({
        color: "white",
        font: {
            fontSize: fontSizePoints
        },
        fontFamily: "Lucida Grande-Bold",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: Alloy.Globals.player04CorrectAnswers + " puntos",
        left: "5",
        top: topForPoints
    });
    $.winner04.add(winner04Name);
    $.winner04.add(winner04Points);
    3 == Alloy.Globals.activeTeamPlayers && ($.winner03.visible = true);
    if (4 == Alloy.Globals.activeTeamPlayers) {
        $.winner03.visible = true;
        $.winner04.visible = true;
    }
    __defers["$.__views.playAgain!click!playAgain"] && $.__views.playAgain.addEventListener("click", playAgain);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;