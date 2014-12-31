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
        var playersView = Alloy.createController("index").getView();
        playersView.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "result";
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
    $.__views.resultBoard = Ti.UI.createView({
        id: "resultBoard",
        layout: "vertical",
        top: "50",
        backgroundImage: "/images/background/single_keepgoing.png",
        width: "678px",
        height: "668px"
    });
    $.__views.board.add($.__views.resultBoard);
    $.__views.playAgain = Ti.UI.createButton({
        id: "playAgain",
        backgroundImage: "/images/buttons/button_playAgain.png",
        bottom: "0",
        right: "15",
        width: "160px",
        height: "160px"
    });
    $.__views.board.add($.__views.playAgain);
    playAgain ? $.__views.playAgain.addEventListener("click", playAgain) : __defers["$.__views.playAgain!click!playAgain"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.correct >= 0 && args.correct <= 3 ? $.resultBoard.backgroundImage = "/images/background/" + Alloy.Globals.subsidiaryCode + "/single_keepgoing.png" : args.correct >= 4 && args.correct <= 6 ? $.resultBoard.backgroundImage = "/images/background/" + Alloy.Globals.subsidiaryCode + "/single_ok.png" : args.correct >= 7 && args.correct <= 9 ? $.resultBoard.backgroundImage = "/images/background/" + Alloy.Globals.subsidiaryCode + "/single_excellent.png" : 10 == args.correct && ($.resultBoard.backgroundImage = "/images/background/" + Alloy.Globals.subsidiaryCode + "/single_congrats.png");
    var winnerPoints = Ti.UI.createLabel({
        color: "pink",
        font: {
            fontSize: 50
        },
        fontFamily: "Lucida Grande-Bold",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: args.correct + " puntos",
        left: "80",
        top: "150"
    });
    $.resultBoard.add(winnerPoints);
    __defers["$.__views.playAgain!click!playAgain"] && $.__views.playAgain.addEventListener("click", playAgain);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;