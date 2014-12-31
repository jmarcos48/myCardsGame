function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showAnswerPlayer01_2players() {
        player.stop();
        player.release();
        if (!Alloy.Globals.isQuestionBlocked) {
            Alloy.Globals.isQuestionBlocked = true;
            $.player01_2players.backgroundImage = "/images/buttons/players2_01_off.png";
            Alloy.Globals.playerThatPressQuestion = 1;
            sendToAnswer();
        }
    }
    function showAnswerPlayer02_2players() {
        player.stop();
        player.release();
        if (!Alloy.Globals.isQuestionBlocked) {
            Alloy.Globals.isQuestionBlocked = true;
            $.player02_2players.backgroundImage = "/images/buttons/players2_02_off.png";
            Alloy.Globals.playerThatPressQuestion = 2;
            sendToAnswer();
        }
    }
    function showAnswerPlayer01_3players() {
        player.stop();
        player.release();
        if (!Alloy.Globals.isQuestionBlocked) {
            Alloy.Globals.isQuestionBlocked = true;
            $.player01_3players.backgroundImage = "/images/buttons/players3_off.png";
            Alloy.Globals.playerThatPressQuestion = 1;
            sendToAnswer();
        }
    }
    function showAnswerPlayer02_3players() {
        player.stop();
        player.release();
        if (!Alloy.Globals.isQuestionBlocked) {
            Alloy.Globals.isQuestionBlocked = true;
            $.player02_3players.backgroundImage = "/images/buttons/players3_off.png";
            Alloy.Globals.playerThatPressQuestion = 2;
            sendToAnswer();
        }
    }
    function showAnswerPlayer03_3players() {
        player.stop();
        player.release();
        if (!Alloy.Globals.isQuestionBlocked) {
            Alloy.Globals.isQuestionBlocked = true;
            $.player03_3players.backgroundImage = "/images/buttons/players3_off.png";
            Alloy.Globals.playerThatPressQuestion = 3;
            sendToAnswer();
        }
    }
    function showAnswerPlayer01_4players() {
        player.stop();
        player.release();
        if (!Alloy.Globals.isQuestionBlocked) {
            Alloy.Globals.isQuestionBlocked = true;
            $.player01_4players.backgroundImage = "/images/buttons/players4_01_off.png";
            Alloy.Globals.playerThatPressQuestion = 1;
            {
                Alloy.createController("answer", args).getView();
            }
            sendToAnswer();
        }
    }
    function showAnswerPlayer02_4players() {
        player.stop();
        player.release();
        if (!Alloy.Globals.isQuestionBlocked) {
            Alloy.Globals.isQuestionBlocked = true;
            $.player02_4players.backgroundImage = "/images/buttons/players4_02_off.png";
            Alloy.Globals.playerThatPressQuestion = 2;
            {
                Alloy.createController("answer", args).getView();
            }
            sendToAnswer();
        }
    }
    function showAnswerPlayer03_4players() {
        player.stop();
        player.release();
        if (!Alloy.Globals.isQuestionBlocked) {
            Alloy.Globals.isQuestionBlocked = true;
            $.player03_4players.backgroundImage = "/images/buttons/players4_03_off.png";
            Alloy.Globals.playerThatPressQuestion = 3;
            {
                Alloy.createController("answer", args).getView();
            }
            sendToAnswer();
        }
    }
    function showAnswerPlayer04_4players() {
        player.stop();
        player.release();
        if (!Alloy.Globals.isQuestionBlocked) {
            Alloy.Globals.isQuestionBlocked = true;
            $.player04_4players.backgroundImage = "/images/buttons/players4_04_off.png";
            Alloy.Globals.playerThatPressQuestion = 4;
            {
                Alloy.createController("answer", args).getView();
            }
            sendToAnswer();
        }
    }
    function sendToAnswer() {
        var answerView = Alloy.createController("answer", args).getView();
        var player = Ti.Media.createSound({
            url: "/audios/beep_08.wav"
        });
        setTimeout(function() {
            player = Ti.Media.createSound({
                url: "/audios/beep_08.wav"
            });
            player.play();
            setTimeout(function() {
                player = Ti.Media.createSound({
                    url: "/audios/beep_08.wav"
                });
                player.play();
                setTimeout(function() {
                    player = Ti.Media.createSound({
                        url: "/audios/beep_08.wav"
                    });
                    player.play();
                    setTimeout(function() {
                        player = Ti.Media.createSound({
                            url: "/audios/beep_08.wav"
                        });
                        player.play();
                        setTimeout(function() {
                            player = Ti.Media.createSound({
                                url: "/audios/beep_08.wav"
                            });
                            player.play();
                            setTimeout(function() {
                                answerView.open({
                                    transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
                                });
                            }, Alloy.Globals.secondsToWaitQuestion);
                        }, Alloy.Globals.delayForBeep);
                    }, Alloy.Globals.delayForBeep);
                }, Alloy.Globals.delayForBeep);
            }, Alloy.Globals.delayForBeep);
        }, Alloy.Globals.delayForBeep);
    }
    function replayQuestion() {
        if (!Alloy.Globals.isQuestionBlocked) {
            player.stop();
            player.play();
        }
    }
    function init() {
        $.player01_2players.visible = false;
        $.player02_2players.visible = false;
        $.speaker_2players.visible = false;
        $.replayButton_2players.visible = false;
        $.exitButton_2players.visible = false;
        $.player01_3players.visible = false;
        $.player02_3players.visible = false;
        $.player03_3players.visible = false;
        $.speaker_3players.visible = false;
        $.replayButton_3players.visible = false;
        $.exitButton_3players.visible = false;
        $.player01_4players.visible = false;
        $.player02_4players.visible = false;
        $.player03_4players.visible = false;
        $.player04_4players.visible = false;
        $.speaker_4players.visible = false;
        $.replayButton_4players.visible = false;
        $.exitButton_4players.visible = false;
    }
    function exitGame() {
        player.stop();
        player.release();
        var homeView = Alloy.createController("index").getView();
        homeView.open({
            transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "card";
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
    $.__views.card = Ti.UI.createWindow({
        id: "card",
        backgroundImage: "/images/background/general.jpg"
    });
    $.__views.card && $.addTopLevelView($.__views.card);
    $.__views.player01_2players = Ti.UI.createButton({
        id: "player01_2players",
        visible: "false",
        backgroundImage: "/images/buttons/players2_01.png",
        top: "0",
        width: "100%",
        height: "30%"
    });
    $.__views.card.add($.__views.player01_2players);
    showAnswerPlayer01_2players ? $.__views.player01_2players.addEventListener("click", showAnswerPlayer01_2players) : __defers["$.__views.player01_2players!click!showAnswerPlayer01_2players"] = true;
    $.__views.player02_2players = Ti.UI.createButton({
        id: "player02_2players",
        visible: "false",
        backgroundImage: "/images/buttons/players2_02.png",
        bottom: "0",
        width: "100%",
        height: "30%"
    });
    $.__views.card.add($.__views.player02_2players);
    showAnswerPlayer02_2players ? $.__views.player02_2players.addEventListener("click", showAnswerPlayer02_2players) : __defers["$.__views.player02_2players!click!showAnswerPlayer02_2players"] = true;
    $.__views.speaker_2players = Ti.UI.createImageView({
        id: "speaker_2players",
        visible: "false",
        image: "/images/button_speaker.png",
        top: "180",
        left: "10",
        width: "45%",
        height: "25%"
    });
    $.__views.card.add($.__views.speaker_2players);
    $.__views.replayButton_2players = Ti.UI.createButton({
        id: "replayButton_2players",
        visible: "false",
        backgroundImage: "/images/buttons/button_replay.png",
        top: "170",
        right: "50",
        width: "233px",
        height: "131px"
    });
    $.__views.card.add($.__views.replayButton_2players);
    replayQuestion ? $.__views.replayButton_2players.addEventListener("click", replayQuestion) : __defers["$.__views.replayButton_2players!click!replayQuestion"] = true;
    $.__views.exitButton_2players = Ti.UI.createButton({
        id: "exitButton_2players",
        visible: "false",
        backgroundImage: "/images/buttons/button_exit.png",
        top: "250",
        right: "65",
        width: "173px",
        height: "171px"
    });
    $.__views.card.add($.__views.exitButton_2players);
    exitGame ? $.__views.exitButton_2players.addEventListener("click", exitGame) : __defers["$.__views.exitButton_2players!click!exitGame"] = true;
    $.__views.player01_3players = Ti.UI.createButton({
        id: "player01_3players",
        visible: "false",
        backgroundImage: "/images/buttons/players3_01.png",
        top: "40",
        width: "100%",
        height: "20%"
    });
    $.__views.card.add($.__views.player01_3players);
    showAnswerPlayer01_3players ? $.__views.player01_3players.addEventListener("click", showAnswerPlayer01_3players) : __defers["$.__views.player01_3players!click!showAnswerPlayer01_3players"] = true;
    $.__views.player02_3players = Ti.UI.createButton({
        id: "player02_3players",
        visible: "false",
        backgroundImage: "/images/buttons/players3_02.png",
        top: "160",
        width: "100%",
        height: "20%"
    });
    $.__views.card.add($.__views.player02_3players);
    showAnswerPlayer02_3players ? $.__views.player02_3players.addEventListener("click", showAnswerPlayer02_3players) : __defers["$.__views.player02_3players!click!showAnswerPlayer02_3players"] = true;
    $.__views.player03_3players = Ti.UI.createButton({
        id: "player03_3players",
        visible: "false",
        backgroundImage: "/images/buttons/players3_03.png",
        top: "280",
        width: "100%",
        height: "20%"
    });
    $.__views.card.add($.__views.player03_3players);
    showAnswerPlayer03_3players ? $.__views.player03_3players.addEventListener("click", showAnswerPlayer03_3players) : __defers["$.__views.player03_3players!click!showAnswerPlayer03_3players"] = true;
    $.__views.speaker_3players = Ti.UI.createImageView({
        id: "speaker_3players",
        visible: "false",
        image: "/images/button_speaker.png",
        bottom: "0",
        left: "5",
        width: "45%",
        height: "25%"
    });
    $.__views.card.add($.__views.speaker_3players);
    $.__views.replayButton_3players = Ti.UI.createButton({
        id: "replayButton_3players",
        visible: "false",
        backgroundImage: "/images/buttons/button_replay.png",
        bottom: "49",
        right: "60",
        width: "233px",
        height: "131px"
    });
    $.__views.card.add($.__views.replayButton_3players);
    replayQuestion ? $.__views.replayButton_3players.addEventListener("click", replayQuestion) : __defers["$.__views.replayButton_3players!click!replayQuestion"] = true;
    $.__views.exitButton_3players = Ti.UI.createButton({
        id: "exitButton_3players",
        visible: "false",
        backgroundImage: "/images/buttons/button_exit.png",
        bottom: "0",
        right: "5",
        width: "173px",
        height: "171px"
    });
    $.__views.card.add($.__views.exitButton_3players);
    exitGame ? $.__views.exitButton_3players.addEventListener("click", exitGame) : __defers["$.__views.exitButton_3players!click!exitGame"] = true;
    $.__views.player01_4players = Ti.UI.createButton({
        id: "player01_4players",
        visible: "false",
        backgroundImage: "/images/buttons/players4_01.png",
        top: "0",
        left: "0",
        width: "50%",
        height: "38%"
    });
    $.__views.card.add($.__views.player01_4players);
    showAnswerPlayer01_4players ? $.__views.player01_4players.addEventListener("click", showAnswerPlayer01_4players) : __defers["$.__views.player01_4players!click!showAnswerPlayer01_4players"] = true;
    $.__views.player02_4players = Ti.UI.createButton({
        id: "player02_4players",
        visible: "false",
        backgroundImage: "/images/buttons/players4_02.png",
        top: "0",
        right: "0",
        width: "50%",
        height: "38%"
    });
    $.__views.card.add($.__views.player02_4players);
    showAnswerPlayer02_4players ? $.__views.player02_4players.addEventListener("click", showAnswerPlayer02_4players) : __defers["$.__views.player02_4players!click!showAnswerPlayer02_4players"] = true;
    $.__views.player03_4players = Ti.UI.createButton({
        id: "player03_4players",
        visible: "false",
        backgroundImage: "/images/buttons/players4_03.png",
        bottom: "0",
        left: "0",
        width: "50%",
        height: "38%"
    });
    $.__views.card.add($.__views.player03_4players);
    showAnswerPlayer03_4players ? $.__views.player03_4players.addEventListener("click", showAnswerPlayer03_4players) : __defers["$.__views.player03_4players!click!showAnswerPlayer03_4players"] = true;
    $.__views.player04_4players = Ti.UI.createButton({
        id: "player04_4players",
        visible: "false",
        backgroundImage: "/images/buttons/players4_04.png",
        bottom: "0",
        right: "0",
        width: "50%",
        height: "38%"
    });
    $.__views.card.add($.__views.player04_4players);
    showAnswerPlayer04_4players ? $.__views.player04_4players.addEventListener("click", showAnswerPlayer04_4players) : __defers["$.__views.player04_4players!click!showAnswerPlayer04_4players"] = true;
    $.__views.speaker_4players = Ti.UI.createImageView({
        id: "speaker_4players",
        visible: "false",
        image: "/images/button_speaker.png",
        width: "35%",
        height: "15%",
        top: "220",
        left: "0"
    });
    $.__views.card.add($.__views.speaker_4players);
    $.__views.replayButton_4players = Ti.UI.createButton({
        id: "replayButton_4players",
        visible: "false",
        backgroundImage: "/images/buttons/button_replay.png",
        width: "233px",
        height: "131px",
        top: "230",
        right: "90"
    });
    $.__views.card.add($.__views.replayButton_4players);
    replayQuestion ? $.__views.replayButton_4players.addEventListener("click", replayQuestion) : __defers["$.__views.replayButton_4players!click!replayQuestion"] = true;
    $.__views.exitButton_4players = Ti.UI.createButton({
        id: "exitButton_4players",
        visible: "false",
        backgroundImage: "/images/buttons/button_exit.png",
        width: "173px",
        height: "171px",
        top: "220",
        right: "0"
    });
    $.__views.card.add($.__views.exitButton_4players);
    exitGame ? $.__views.exitButton_4players.addEventListener("click", exitGame) : __defers["$.__views.exitButton_4players!click!exitGame"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = {
        id: 0,
        image: "",
        answer: ""
    };
    init();
    Alloy.Globals.isQuestionBlocked = false;
    $.player01_2players.title = Alloy.Globals.player01Name;
    $.player02_2players.title = Alloy.Globals.player02Name;
    $.player01_3players.title = Alloy.Globals.player01Name;
    $.player02_3players.title = Alloy.Globals.player02Name;
    $.player03_3players.title = Alloy.Globals.player03Name;
    $.player01_4players.title = Alloy.Globals.player01Name;
    $.player02_4players.title = Alloy.Globals.player02Name;
    $.player03_4players.title = Alloy.Globals.player03Name;
    $.player04_4players.title = Alloy.Globals.player04Name;
    if (2 == Alloy.Globals.activeTeamPlayers) {
        $.player01_2players.visible = true;
        $.player02_2players.visible = true;
        $.speaker_2players.visible = true;
        $.replayButton_2players.visible = true;
        $.exitButton_2players.visible = true;
    }
    if (3 == Alloy.Globals.activeTeamPlayers) {
        $.player01_3players.visible = true;
        $.player02_3players.visible = true;
        $.player03_3players.visible = true;
        $.speaker_3players.visible = true;
        $.replayButton_3players.visible = true;
        $.exitButton_3players.visible = true;
    }
    if (4 == Alloy.Globals.activeTeamPlayers) {
        $.player01_4players.visible = true;
        $.player02_4players.visible = true;
        $.player03_4players.visible = true;
        $.player04_4players.visible = true;
        $.speaker_4players.visible = true;
        $.replayButton_4players.visible = true;
        $.exitButton_4players.visible = true;
    }
    var questionRandom = Math.floor(Math.random() * Alloy.Globals.totalTeamQuestions);
    Ti.API.info("Random team: " + questionRandom);
    var args = {
        id: questionRandom
    };
    var results = [];
    try {
        var db = Titanium.Database.open(Alloy.Globals.dataBaseName);
        var rows = db.execute("SELECT * FROM team_question where id_deck = " + Alloy.Globals.deckToPlay + " and id_question = " + questionRandom);
        while (rows.isValidRow()) {
            results.push({
                idQuestion: rows.fieldByName("id_question"),
                imageQuestion: rows.fieldByName("image_question"),
                audioQuestion: rows.fieldByName("audio_question"),
                question: rows.fieldByName("question"),
                answer: rows.fieldByName("answer")
            });
            rows.next();
        }
        rows.close();
        db.close();
    } catch (e) {
        Ti.API.info(" Exception : " + e);
    }
    var item = results[0];
    args = {
        id: questionRandom,
        image: item.imageQuestion,
        answer: item.answer
    };
    Alloy.Globals.question = Alloy.Globals.question + 1;
    var player = Ti.Media.createSound({
        url: item.audioQuestion
    });
    setTimeout(function() {
        player.play();
    }, Alloy.Globals.delayAudioBegin);
    __defers["$.__views.player01_2players!click!showAnswerPlayer01_2players"] && $.__views.player01_2players.addEventListener("click", showAnswerPlayer01_2players);
    __defers["$.__views.player02_2players!click!showAnswerPlayer02_2players"] && $.__views.player02_2players.addEventListener("click", showAnswerPlayer02_2players);
    __defers["$.__views.replayButton_2players!click!replayQuestion"] && $.__views.replayButton_2players.addEventListener("click", replayQuestion);
    __defers["$.__views.exitButton_2players!click!exitGame"] && $.__views.exitButton_2players.addEventListener("click", exitGame);
    __defers["$.__views.player01_3players!click!showAnswerPlayer01_3players"] && $.__views.player01_3players.addEventListener("click", showAnswerPlayer01_3players);
    __defers["$.__views.player02_3players!click!showAnswerPlayer02_3players"] && $.__views.player02_3players.addEventListener("click", showAnswerPlayer02_3players);
    __defers["$.__views.player03_3players!click!showAnswerPlayer03_3players"] && $.__views.player03_3players.addEventListener("click", showAnswerPlayer03_3players);
    __defers["$.__views.replayButton_3players!click!replayQuestion"] && $.__views.replayButton_3players.addEventListener("click", replayQuestion);
    __defers["$.__views.exitButton_3players!click!exitGame"] && $.__views.exitButton_3players.addEventListener("click", exitGame);
    __defers["$.__views.player01_4players!click!showAnswerPlayer01_4players"] && $.__views.player01_4players.addEventListener("click", showAnswerPlayer01_4players);
    __defers["$.__views.player02_4players!click!showAnswerPlayer02_4players"] && $.__views.player02_4players.addEventListener("click", showAnswerPlayer02_4players);
    __defers["$.__views.player03_4players!click!showAnswerPlayer03_4players"] && $.__views.player03_4players.addEventListener("click", showAnswerPlayer03_4players);
    __defers["$.__views.player04_4players!click!showAnswerPlayer04_4players"] && $.__views.player04_4players.addEventListener("click", showAnswerPlayer04_4players);
    __defers["$.__views.replayButton_4players!click!replayQuestion"] && $.__views.replayButton_4players.addEventListener("click", replayQuestion);
    __defers["$.__views.exitButton_4players!click!exitGame"] && $.__views.exitButton_4players.addEventListener("click", exitGame);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;