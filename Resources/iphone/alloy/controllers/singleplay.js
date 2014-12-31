function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function option01Clicked() {
        if (!Alloy.Globals.isQuestionBlocked) {
            Alloy.Globals.isQuestionBlocked = true;
            if (1 == correctOption) {
                var player = Ti.Media.createSound({
                    url: "/audios/correct.mp3"
                });
                player.play();
                $.option01.backgroundImage = "/images/background/correctAnswer01.png";
                Alloy.Globals.singlePlayerCorrectAnswers = Alloy.Globals.singlePlayerCorrectAnswers + 1;
            } else {
                var player = Ti.Media.createSound({
                    url: "/audios/incorrect.mp3"
                });
                player.play();
                $.option01.backgroundImage = "/images/background/wrongAnswer01.png";
                2 == correctOption && ($.option02.backgroundImage = "/images/background/correctAnswer02.png");
                3 == correctOption && ($.option03.backgroundImage = "/images/background/correctAnswer01.png");
                4 == correctOption && ($.option04.backgroundImage = "/images/background/correctAnswer02.png");
            }
        }
    }
    function option02Clicked() {
        if (!Alloy.Globals.isQuestionBlocked) {
            Alloy.Globals.isQuestionBlocked = true;
            if (2 == correctOption) {
                var player = Ti.Media.createSound({
                    url: "/audios/correct.mp3"
                });
                player.play();
                $.option02.backgroundImage = "/images/background/correctAnswer02.png";
                Alloy.Globals.singlePlayerCorrectAnswers = Alloy.Globals.singlePlayerCorrectAnswers + 1;
            } else {
                var player = Ti.Media.createSound({
                    url: "/audios/incorrect.mp3"
                });
                player.play();
                $.option02.backgroundImage = "/images/background/wrongAnswer02.png";
                1 == correctOption && ($.option01.backgroundImage = "/images/background/correctAnswer01.png");
                3 == correctOption && ($.option03.backgroundImage = "/images/background/correctAnswer01.png");
                4 == correctOption && ($.option04.backgroundImage = "/images/background/correctAnswer02.png");
            }
        }
    }
    function option03Clicked() {
        if (!Alloy.Globals.isQuestionBlocked) {
            Alloy.Globals.isQuestionBlocked = true;
            if (3 == correctOption) {
                var player = Ti.Media.createSound({
                    url: "/audios/correct.mp3"
                });
                player.play();
                $.option03.backgroundImage = "/images/background/correctAnswer01.png";
                Alloy.Globals.singlePlayerCorrectAnswers = Alloy.Globals.singlePlayerCorrectAnswers + 1;
            } else {
                var player = Ti.Media.createSound({
                    url: "/audios/incorrect.mp3"
                });
                player.play();
                $.option03.backgroundImage = "/images/background/wrongAnswer01.png";
                1 == correctOption && ($.option01.backgroundImage = "/images/background/correctAnswer01.png");
                2 == correctOption && ($.option02.backgroundImage = "/images/background/correctAnswer02.png");
                4 == correctOption && ($.option04.backgroundImage = "/images/background/correctAnswer02.png");
            }
        }
    }
    function option04Clicked() {
        if (!Alloy.Globals.isQuestionBlocked) {
            Alloy.Globals.isQuestionBlocked = true;
            if (4 == correctOption) {
                var player = Ti.Media.createSound({
                    url: "/audios/correct.mp3"
                });
                player.play();
                $.option04.backgroundImage = "/images/background/correctAnswer02.png";
                Alloy.Globals.singlePlayerCorrectAnswers = Alloy.Globals.singlePlayerCorrectAnswers + 1;
            } else {
                var player = Ti.Media.createSound({
                    url: "/audios/incorrect.mp3"
                });
                player.play();
                $.option04.backgroundImage = "/images/background/wrongAnswer02.png";
                1 == correctOption && ($.option01.backgroundImage = "/images/background/correctAnswer01.png");
                2 == correctOption && ($.option02.backgroundImage = "/images/background/correctAnswer02.png");
                3 == correctOption && ($.option03.backgroundImage = "/images/background/correctAnswer01.png");
            }
        }
    }
    function nextQuestion() {
        if (Alloy.Globals.singleQuestion < Alloy.Globals.totalTeamQuestions_1players) {
            var questionView = Alloy.createController("singleplay").getView();
            questionView.open({
                transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
            });
        } else {
            args = {
                id: 0,
                correct: Alloy.Globals.singlePlayerCorrectAnswers
            };
            var winners = Alloy.createController("result", args).getView();
            winners.open({
                transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
            });
        }
    }
    function exitGame() {
        var homeView = Alloy.createController("index").getView();
        homeView.open({
            transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "singleplay";
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
    $.__views.singlePlayer = Ti.UI.createWindow({
        id: "singlePlayer",
        backgroundImage: "/images/background/singleplayer.jpg"
    });
    $.__views.singlePlayer && $.addTopLevelView($.__views.singlePlayer);
    $.__views.rowContainer = Ti.UI.createView({
        id: "rowContainer",
        width: "80%",
        height: "30%",
        top: "30"
    });
    $.__views.singlePlayer.add($.__views.rowContainer);
    $.__views.question = Ti.UI.createLabel({
        id: "question",
        text: ""
    });
    $.__views.rowContainer.add($.__views.question);
    $.__views.option01 = Ti.UI.createButton({
        font: {
            fontSize: 12
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "option01",
        backgroundImage: "/images/background/answer01.png",
        bottom: "210",
        width: "100%",
        height: "10%",
        left: "5",
        right: "5"
    });
    $.__views.singlePlayer.add($.__views.option01);
    option01Clicked ? $.__views.option01.addEventListener("click", option01Clicked) : __defers["$.__views.option01!click!option01Clicked"] = true;
    $.__views.option02 = Ti.UI.createButton({
        font: {
            fontSize: 12
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "option02",
        backgroundImage: "/images/background/answer02.png",
        bottom: "170",
        width: "100%",
        height: "10%",
        left: "5",
        right: "5"
    });
    $.__views.singlePlayer.add($.__views.option02);
    option02Clicked ? $.__views.option02.addEventListener("click", option02Clicked) : __defers["$.__views.option02!click!option02Clicked"] = true;
    $.__views.option03 = Ti.UI.createButton({
        font: {
            fontSize: 12
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "option03",
        backgroundImage: "/images/background/answer01.png",
        bottom: "120",
        width: "100%",
        height: "10%",
        left: "5",
        right: "5"
    });
    $.__views.singlePlayer.add($.__views.option03);
    option03Clicked ? $.__views.option03.addEventListener("click", option03Clicked) : __defers["$.__views.option03!click!option03Clicked"] = true;
    $.__views.option04 = Ti.UI.createButton({
        font: {
            fontSize: 12
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "option04",
        backgroundImage: "/images/background/answer02.png",
        bottom: "80",
        width: "100%",
        height: "10%",
        left: "5",
        right: "5"
    });
    $.__views.singlePlayer.add($.__views.option04);
    option04Clicked ? $.__views.option04.addEventListener("click", option04Clicked) : __defers["$.__views.option04!click!option04Clicked"] = true;
    $.__views.exitButton = Ti.UI.createButton({
        font: {
            fontSize: 12
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "exitButton",
        backgroundImage: "/images/buttons/button_exit.png",
        bottom: "0",
        left: "0",
        width: "80",
        height: "80"
    });
    $.__views.singlePlayer.add($.__views.exitButton);
    exitGame ? $.__views.exitButton.addEventListener("click", exitGame) : __defers["$.__views.exitButton!click!exitGame"] = true;
    $.__views.nextButton = Ti.UI.createButton({
        font: {
            fontSize: 12
        },
        color: "gray",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "nextButton",
        backgroundImage: "/images/buttons/button_next.png",
        bottom: "0",
        right: "0",
        width: "80",
        height: "80"
    });
    $.__views.singlePlayer.add($.__views.nextButton);
    nextQuestion ? $.__views.nextButton.addEventListener("click", nextQuestion) : __defers["$.__views.nextButton!click!nextQuestion"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = {
        id: 0,
        correct: 0
    };
    Alloy.Globals.singleQuestion = Alloy.Globals.singleQuestion + 1;
    var questionRandom = Math.floor(Math.random() * Alloy.Globals.totalSingleQuestions);
    Alloy.Globals.isQuestionBlocked = false;
    Ti.API.info("Random single: " + questionRandom);
    var results = [];
    var results2 = [];
    try {
        var db = Titanium.Database.open(Alloy.Globals.dataBaseName);
        var rows = db.execute("SELECT * FROM single_question where id_deck = " + Alloy.Globals.deckToPlay + " and id_question = " + questionRandom);
        while (rows.isValidRow()) {
            results.push({
                idQuestion: rows.fieldByName("id_question"),
                question: rows.fieldByName("question"),
                correctAnswer: rows.fieldByName("correct_answer")
            });
            rows.next();
        }
        rows.close();
        var rows2 = db.execute("SELECT * FROM single_question_answer where id_deck = " + Alloy.Globals.deckToPlay + " and id_question = " + questionRandom);
        while (rows2.isValidRow()) {
            results2.push({
                idAnswer: rows2.fieldByName("id_answer"),
                answer: rows2.fieldByName("answer")
            });
            rows2.next();
        }
        rows2.close();
        db.close();
    } catch (e) {
        Ti.API.info(" Exception : " + e);
    }
    var item = results[0];
    var option01 = results2[0];
    var option02 = results2[1];
    var option03 = results2[2];
    var option04 = results2[3];
    var correctOption = item.correctAnswer;
    $.question.text = item.question;
    $.option01.title = option01.answer;
    $.option02.title = option02.answer;
    $.option03.title = option03.answer;
    $.option04.title = option04.answer;
    __defers["$.__views.option01!click!option01Clicked"] && $.__views.option01.addEventListener("click", option01Clicked);
    __defers["$.__views.option02!click!option02Clicked"] && $.__views.option02.addEventListener("click", option02Clicked);
    __defers["$.__views.option03!click!option03Clicked"] && $.__views.option03.addEventListener("click", option03Clicked);
    __defers["$.__views.option04!click!option04Clicked"] && $.__views.option04.addEventListener("click", option04Clicked);
    __defers["$.__views.exitButton!click!exitGame"] && $.__views.exitButton.addEventListener("click", exitGame);
    __defers["$.__views.nextButton!click!nextQuestion"] && $.__views.nextButton.addEventListener("click", nextQuestion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;