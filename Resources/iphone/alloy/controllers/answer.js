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
        var player = Ti.Media.createSound({
            url: "/audios/incorrect.mp3"
        });
        player.play();
        if (Alloy.Globals.question < totalQuestionsInPlay) {
            var questionView = Alloy.createController("card").getView();
            setTimeout(function() {
                questionView.open({
                    transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
                });
            }, Alloy.Globals.secondsToWaitQuestion);
        } else {
            var winners = Alloy.createController("winnersboard").getView();
            setTimeout(function() {
                winners.open({
                    transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
                });
            }, Alloy.Globals.secondsToWaitQuestion);
        }
    }
    function correctAnswer() {
        var player = Ti.Media.createSound({
            url: "/audios/correct.mp3"
        });
        player.play();
        1 == Alloy.Globals.playerThatPressQuestion && (Alloy.Globals.player01CorrectAnswers = Alloy.Globals.player01CorrectAnswers + 1);
        2 == Alloy.Globals.playerThatPressQuestion && (Alloy.Globals.player02CorrectAnswers = Alloy.Globals.player02CorrectAnswers + 1);
        3 == Alloy.Globals.playerThatPressQuestion && (Alloy.Globals.player03CorrectAnswers = Alloy.Globals.player03CorrectAnswers + 1);
        4 == Alloy.Globals.playerThatPressQuestion && (Alloy.Globals.player04CorrectAnswers = Alloy.Globals.player04CorrectAnswers + 1);
        if (Alloy.Globals.question < totalQuestionsInPlay) {
            var questionView = Alloy.createController("card").getView();
            setTimeout(function() {
                questionView.open({
                    transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
                });
            }, Alloy.Globals.secondsToWaitQuestion);
        } else {
            var winners = Alloy.createController("winnersboard").getView();
            setTimeout(function() {
                winners.open({
                    transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
                });
            }, Alloy.Globals.secondsToWaitQuestion);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "answer";
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
    $.__views.answer = Ti.UI.createWindow({
        id: "answer",
        backgroundImage: "/images/background/answer.jpg"
    });
    $.__views.answer && $.addTopLevelView($.__views.answer);
    $.__views.rowContainer = Ti.UI.createView({
        layout: "vertical",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: "75%",
        color: "black",
        id: "rowContainer",
        backgroundColor: "white",
        height: "70%",
        top: "80"
    });
    $.__views.answer.add($.__views.rowContainer);
    $.__views.question = Ti.UI.createLabel({
        id: "question",
        text: "",
        color: "black"
    });
    $.__views.rowContainer.add($.__views.question);
    $.__views.answerImage = Ti.UI.createImageView({
        id: "answerImage",
        image: ""
    });
    $.__views.rowContainer.add($.__views.answerImage);
    $.__views.replayButton = Ti.UI.createButton({
        id: "replayButton",
        backgroundImage: "/images/button_right.png",
        bottom: "10",
        left: "5",
        width: "30%",
        height: "15%"
    });
    $.__views.answer.add($.__views.replayButton);
    correctAnswer ? $.__views.replayButton.addEventListener("click", correctAnswer) : __defers["$.__views.replayButton!click!correctAnswer"] = true;
    $.__views.replayButton = Ti.UI.createButton({
        id: "replayButton",
        backgroundImage: "/images/button_wrong.png",
        bottom: "10",
        right: "5",
        width: "30%",
        height: "15%"
    });
    $.__views.answer.add($.__views.replayButton);
    nextQuestion ? $.__views.replayButton.addEventListener("click", nextQuestion) : __defers["$.__views.replayButton!click!nextQuestion"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.question.text = args.answer;
    $.answerImage.image = args.image;
    var totalQuestionsInPlay = 0;
    2 == Alloy.Globals.activeTeamPlayers ? totalQuestionsInPlay = Alloy.Globals.totalTeamQuestions_2players : 3 == Alloy.Globals.activeTeamPlayers ? totalQuestionsInPlay = Alloy.Globals.totalTeamQuestions_3players : 4 == Alloy.Globals.activeTeamPlayers && (totalQuestionsInPlay = Alloy.Globals.totalTeamQuestions_4players);
    __defers["$.__views.replayButton!click!correctAnswer"] && $.__views.replayButton.addEventListener("click", correctAnswer);
    __defers["$.__views.replayButton!click!nextQuestion"] && $.__views.replayButton.addEventListener("click", nextQuestion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;