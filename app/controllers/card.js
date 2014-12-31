var args = {
	id: 0,
	image: "",
	answer: ""
};	

function showAnswer(){
	player.stop();
	var answerView = Alloy.createController("answer").getView();
	answerView.open({
		transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
}

function showAnswerPlayer01_2players(){
	
	player.stop();
	player.release();	

	if(!Alloy.Globals.isQuestionBlocked){
		Alloy.Globals.isQuestionBlocked = true;
		$.player01_2players.backgroundImage = "/images/buttons/players2_01_off.png";
		Alloy.Globals.playerThatPressQuestion = 1;		
		
		sendToAnswer();
	}
}

function showAnswerPlayer02_2players(){
	
	player.stop();
	player.release();	
		
	if(!Alloy.Globals.isQuestionBlocked){
		Alloy.Globals.isQuestionBlocked = true;
		$.player02_2players.backgroundImage = "/images/buttons/players2_02_off.png";
		Alloy.Globals.playerThatPressQuestion = 2;
		
		sendToAnswer();
	}
}

function showAnswerPlayer01_3players(){
	
	player.stop();
	player.release();
		
	if(!Alloy.Globals.isQuestionBlocked){
		Alloy.Globals.isQuestionBlocked = true;
		$.player01_3players.backgroundImage = "/images/buttons/players3_off.png";
		Alloy.Globals.playerThatPressQuestion = 1;
		
		sendToAnswer();	
	}			
}

function showAnswerPlayer02_3players(){
	
	player.stop();
	player.release();	
		
	if(!Alloy.Globals.isQuestionBlocked){
		Alloy.Globals.isQuestionBlocked = true;
		$.player02_3players.backgroundImage = "/images/buttons/players3_off.png";
		Alloy.Globals.playerThatPressQuestion = 2;
		
		sendToAnswer();
	}			
}

function showAnswerPlayer03_3players(){

	player.stop();
	player.release();
		
	if(!Alloy.Globals.isQuestionBlocked){
		Alloy.Globals.isQuestionBlocked = true;
		$.player03_3players.backgroundImage = "/images/buttons/players3_off.png";
		Alloy.Globals.playerThatPressQuestion = 3;
		
		sendToAnswer();	
	}			
}

function showAnswerPlayer01_4players(){
	
	player.stop();
	player.release();
		
	if(!Alloy.Globals.isQuestionBlocked){
		Alloy.Globals.isQuestionBlocked = true;
		$.player01_4players.backgroundImage = "/images/buttons/players4_01_off.png";
		Alloy.Globals.playerThatPressQuestion = 1;
		var answerView = Alloy.createController("answer", args).getView();
		
		sendToAnswer();	
	}			
}

function showAnswerPlayer02_4players(){
	
	player.stop();
	player.release();
		
	if(!Alloy.Globals.isQuestionBlocked){
		Alloy.Globals.isQuestionBlocked = true;
		$.player02_4players.backgroundImage = "/images/buttons/players4_02_off.png";
		Alloy.Globals.playerThatPressQuestion = 2;
		var answerView = Alloy.createController("answer", args).getView();
		
		sendToAnswer();
	}
}

function showAnswerPlayer03_4players(){

	player.stop();
	player.release();
		
	if(!Alloy.Globals.isQuestionBlocked){
		Alloy.Globals.isQuestionBlocked = true;
		$.player03_4players.backgroundImage = "/images/buttons/players4_03_off.png";
		Alloy.Globals.playerThatPressQuestion = 3;
		var answerView = Alloy.createController("answer", args).getView();
		
		sendToAnswer();
	}
}

function showAnswerPlayer04_4players(){
	
	player.stop();
	player.release();
		
	if(!Alloy.Globals.isQuestionBlocked){
		Alloy.Globals.isQuestionBlocked = true;
		$.player04_4players.backgroundImage = "/images/buttons/players4_04_off.png";
		Alloy.Globals.playerThatPressQuestion = 4;
		var answerView = Alloy.createController("answer", args).getView();

		sendToAnswer();
	}
}


function sendToAnswer(){
	var answerView = Alloy.createController("answer", args).getView();
	var player = Ti.Media.createSound({url:"/audios/beep_08.wav"});
	
	if(OS_IOS){
		//Loop for beep
		setTimeout(function(){
			player = Ti.Media.createSound({url:"/audios/beep_08.wav"});
			player.play();
	
			setTimeout(function(){
				player = Ti.Media.createSound({url:"/audios/beep_08.wav"});
				player.play();
				
				setTimeout(function(){
					player = Ti.Media.createSound({url:"/audios/beep_08.wav"});
					player.play();
					
					setTimeout(function(){
						player = Ti.Media.createSound({url:"/audios/beep_08.wav"});
						player.play();
						
						setTimeout(function(){
							player = Ti.Media.createSound({url:"/audios/beep_08.wav"});
							player.play();
							
							setTimeout(function(){
							   	answerView.open({
									transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
								});
							},Alloy.Globals.secondsToWaitQuestion);						
							
						},Alloy.Globals.delayForBeep);
										
					},Alloy.Globals.delayForBeep);					
					
				},Alloy.Globals.delayForBeep);				
				
			},Alloy.Globals.delayForBeep);
	
		},Alloy.Globals.delayForBeep);			
	}else{	   			   
		$.card.close();
		setTimeout(function(){
		   	answerView.open();
		},Alloy.Globals.secondsToWaitQuestion);		   	
	}	
}

//BEGIN CONTROLLER PROCESS
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

if(Alloy.Globals.activeTeamPlayers == 2){
	$.player01_2players.visible = true;
	$.player02_2players.visible = true;
	
	$.speaker_2players.visible = true;
	$.replayButton_2players.visible = true;
	$.exitButton_2players.visible = true;
}

if(Alloy.Globals.activeTeamPlayers == 3){
	$.player01_3players.visible = true;
	$.player02_3players.visible = true;
	$.player03_3players.visible = true;
	
	$.speaker_3players.visible = true;
	$.replayButton_3players.visible = true;
	$.exitButton_3players.visible = true;
}

if(Alloy.Globals.activeTeamPlayers == 4){
	$.player01_4players.visible = true;
	$.player02_4players.visible = true;
	$.player03_4players.visible = true;
	$.player04_4players.visible = true;
	
	$.speaker_4players.visible = true;
	$.replayButton_4players.visible = true;
	$.exitButton_4players.visible = true;
}

var questionRandom = Math.floor(Math.random()*Alloy.Globals.totalTeamQuestions);
Ti.API.info("Random team: " + questionRandom);

var args = {
	id: questionRandom
};

var results = [];
try{
	var db = Titanium.Database.open(Alloy.Globals.dataBaseName);
	var rows = db.execute("SELECT * FROM team_question where id_deck = " + Alloy.Globals.deckToPlay + " and id_question = " + questionRandom);
	
	while (rows.isValidRow()) {          	                   
	          results.push({
	            idQuestion: rows.fieldByName('id_question'),
	            imageQuestion: rows.fieldByName('image_question'),
	            audioQuestion: rows.fieldByName('audio_question'),
	            question: rows.fieldByName('question'),
	            answer: rows.fieldByName('answer'),
	          });
	         
	          rows.next();
	}
	rows.close();
	db.close();	
}catch(e){
	Ti.API.info(" Exception : " + e);
}

var item = results[0];

args = {
	id: questionRandom,
	image: item.imageQuestion,
	answer: item.answer
};

Alloy.Globals.question = Alloy.Globals.question + 1;
var player = Ti.Media.createSound({url:item.audioQuestion});

setTimeout(function(){
	player.play();
},Alloy.Globals.delayAudioBegin);


function replayQuestion(){
	if(!Alloy.Globals.isQuestionBlocked){
		player.stop();
		player.play();
	}
}


function init(){
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

function exitGame(){	
	player.stop();	
	player.release();
	
	var homeView = Alloy.createController("index").getView();
	
	if(OS_IOS){
		homeView.open({
			transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});		
	}else{
		$.card.close();
		homeView.open();
	}		
}
