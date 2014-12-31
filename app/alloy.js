// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){}; 

Ti.API.info("Country: " + Ti.Locale.getCurrentCountry());

Alloy.Globals.subsidiaryCode = "AR";

if(Alloy.Globals.subsidiaryCode != "AR"){
	Alloy.Globals.subsidiaryCode = "MX";
	Ti.API.info("Country not supported... using default country: " + Alloy.Globals.subsidiaryCode);
}

Alloy.Globals.totalTeamQuestions = 200;
Alloy.Globals.totalSingleQuestions = 200;
Alloy.Globals.deckToPlay = 1;
Alloy.Globals.audioEnabled = true;

if(Alloy.Globals.subsidiaryCode == "AR"){
	Alloy.Globals.totalTeamQuestions = 190;
	Alloy.Globals.totalSingleQuestions = 184;
	Alloy.Globals.deckToPlay = 2;
	Alloy.Globals.audioEnabled = false;
}

Alloy.Globals.totalTeamQuestions_4players = 16;
Alloy.Globals.totalTeamQuestions_3players = 12;
Alloy.Globals.totalTeamQuestions_2players = 10;
Alloy.Globals.totalTeamQuestions_1players = 10;

Alloy.Globals.secondsToWaitQuestion = 1000;
Alloy.Globals.delayForBeep = 1000;
Alloy.Globals.delayAudioBegin = 2000;
Alloy.Globals.isQuestionBlocked = false;

Alloy.Globals.activeTeamPlayers = 2;
Alloy.Globals.player01Name = "";
Alloy.Globals.player02Name = "";
Alloy.Globals.player03Name = "";
Alloy.Globals.player04Name = "";

Alloy.Globals.question = 0;
Alloy.Globals.singleQuestion = 0;
Alloy.Globals.playerThatPressQuestion = 0;
Alloy.Globals.player01CorrectAnswers = 0;
Alloy.Globals.player02CorrectAnswers = 0;
Alloy.Globals.player03CorrectAnswers = 0;
Alloy.Globals.player04CorrectAnswers = 0;
Alloy.Globals.singlePlayerCorrectAnswers = 0;

Alloy.Globals.dataBaseName = "Trivia_v22";
Alloy.Globals.dataBaseLocationFile = "/database/cards_v3.sqlite";
Alloy.Globals.verifyDataBase = function() {
	
	Ti.API.info(Ti.Filesystem.applicationSupportDirectory + '/database/Trivia.sql');
	
	var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationSupportDirectory+'/database/'+ 'Trivia.sql');
	if(f.exists() == true){
	     f.deleteFile();
	}		
	Ti.Database.install(Alloy.Globals.dataBaseLocationFile, Alloy.Globals.dataBaseName);
};


Alloy.Globals.resetVariables = function() {
	Alloy.Globals.isQuestionBlocked = false;
	Alloy.Globals.activeTeamPlayers = 2;
	Alloy.Globals.player01Name = "";
	Alloy.Globals.player02Name = "";
	Alloy.Globals.player03Name = "";
	Alloy.Globals.player04Name = "";
		
	Alloy.Globals.question = 0;
	Alloy.Globals.singleQuestion = 0;
	Alloy.Globals.playerThatPressQuestion = 0;
	Alloy.Globals.player01CorrectAnswers = 0;
	Alloy.Globals.player02CorrectAnswers = 0;
	Alloy.Globals.player03CorrectAnswers = 0;
	Alloy.Globals.player04CorrectAnswers = 0;
	Alloy.Globals.singlePlayerCorrectAnswers = 0;	
};




