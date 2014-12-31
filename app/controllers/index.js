Alloy.Globals.resetVariables();
Alloy.Globals.verifyDataBase();

if(Alloy.Globals.subsidiaryCode == "AR"){
	$.welcomeWindow.backgroundImage = "/images/background/AR/play.png";
}else{
	$.welcomeWindow.backgroundImage = "/images/background/MX/play.jpg";
}

$.welcomeWindow.open();
var player = Ti.Media.createSound({url:"/audios/welcome.mp3"});
playAudio();


function goToPLayers(){
	stopAudio();
	
	var playersView = Alloy.createController("rulesTeam").getView();
	playersView.open();
}

function goToSinglePlayer(){
	var playersView = Alloy.createController("rulesSingle").getView();
	playersView.open();
	stopAudio();
}

function goToWinners(){
	stopAudio();
		
	var playersView = Alloy.createController("winnersboard").getView();
	playersView.open();
}

function playAudio(){
	if(Alloy.Globals.audioEnabled){
		player.setLooping(true);
		player.play();
	}
}

function stopAudio(){
	if(Alloy.Globals.audioEnabled){
		player.stop();
	}	
}
