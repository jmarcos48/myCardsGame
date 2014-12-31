function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function play() {
        $.rulesTeam.close();
        var playersView = Alloy.createController("singleplay").getView();
        playersView.open();
    }
    function back() {
        $.rulesTeam.close();
        var homeView = Alloy.createController("index").getView();
        homeView.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rulesSingle";
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
    $.__views.rulesTeam = Ti.UI.createWindow({
        id: "rulesTeam",
        backgroundImage: "/images/background/rules_single.jpg"
    });
    $.__views.rulesTeam && $.addTopLevelView($.__views.rulesTeam);
    $.__views.backButton = Ti.UI.createButton({
        id: "backButton",
        width: "30%",
        height: "15%",
        bottom: "0",
        left: "1",
        backgroundImage: "/images/buttons/button_back.png"
    });
    $.__views.rulesTeam.add($.__views.backButton);
    back ? $.__views.backButton.addEventListener("click", back) : __defers["$.__views.backButton!click!back"] = true;
    $.__views.play = Ti.UI.createButton({
        id: "play",
        backgroundImage: "/images/buttons/button_play.png",
        bottom: "0",
        right: "1",
        width: "30%",
        height: "15%"
    });
    $.__views.rulesTeam.add($.__views.play);
    play ? $.__views.play.addEventListener("click", play) : __defers["$.__views.play!click!play"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.rulesTeam.backgroundImage = "AR" == Alloy.Globals.subsidiaryCode ? "/images/background/AR/rules_single.png" : "/images/background/MX/rules_single.jpg";
    __defers["$.__views.backButton!click!back"] && $.__views.backButton.addEventListener("click", back);
    __defers["$.__views.play!click!play"] && $.__views.play.addEventListener("click", play);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;