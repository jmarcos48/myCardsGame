function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function nextQuestion() {
        if (Alloy.Globals.question < 10) {
            var questionView = Alloy.createController("card").getView();
            questionView.open({
                transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
            });
        } else {
            var winners = Alloy.createController("winnersboard").getView();
            winners.open({
                transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "points";
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
    $.__views.pointsWindow = Ti.UI.createWindow({
        id: "pointsWindow",
        backgroundImage: "/images/background/points.jpg",
        backgroundColor: "#FBC9BA",
        barColor: "black",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK
    });
    $.__views.pointsWindow && $.addTopLevelView($.__views.pointsWindow);
    $.__views.nextQuestionButton = Ti.UI.createButton({
        id: "nextQuestionButton",
        title: "Next Question",
        style: "fontSize:'12'",
        bottom: "0",
        backgroundColor: "black",
        left: "5"
    });
    $.__views.pointsWindow.add($.__views.nextQuestionButton);
    nextQuestion ? $.__views.nextQuestionButton.addEventListener("click", nextQuestion) : __defers["$.__views.nextQuestionButton!click!nextQuestion"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.nextQuestionButton!click!nextQuestion"] && $.__views.nextQuestionButton.addEventListener("click", nextQuestion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;