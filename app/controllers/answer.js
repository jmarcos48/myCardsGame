var args = arguments[0] || {};

$.question.text = args.answer;
$.answerImage.image = args.image;

var totalQuestionsInPlay = 0;

if(Alloy.Globals.activeTeamPlayers == 2){
	totalQuestionsInPlay = Alloy.Globals.totalTeamQuestions_2players;
}else if(Alloy.Globals.activeTeamPlayers == 3){
	totalQuestionsInPlay = Alloy.Globals.totalTeamQuestions_3players;
}else if(Alloy.Globals.activeTeamPlayers == 4){
	totalQuestionsInPlay = Alloy.Globals.totalTeamQuestions_4players;
}


function nextQuestion(){
	var player = Ti.Media.createSound({url:"/audios/incorrect.mp3"});
	player.play();
	
	if(!OS_IOS){
		$.answer.close();
	}
	
	if(Alloy.Globals.question < totalQuestionsInPlay){
		var questionView = Alloy.createController("card").getView();
		
		if(OS_IOS){
			setTimeout(function(){
				questionView.open({
					transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
				});
			},Alloy.Globals.secondsToWaitQuestion);			
		}else{
			setTimeout(function(){
				questionView.open();
			},Alloy.Globals.secondsToWaitQuestion);			
		}		
		
	}else{
		var winners = Alloy.createController("winnersboard").getView();			
		
		if(OS_IOS){
			setTimeout(function(){
				winners.open({
					transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
				});
			},Alloy.Globals.secondsToWaitQuestion);			
		}else{
			setTimeout(function(){
				winners.open();
			},Alloy.Globals.secondsToWaitQuestion);			
		}			
	}
}

function correctAnswer(){
	
	var player = Ti.Media.createSound({url:"/audios/correct.mp3"});
	player.play();
	
	if(Alloy.Globals.playerThatPressQuestion == 1){
		Alloy.Globals.player01CorrectAnswers = Alloy.Globals.player01CorrectAnswers + 1;
	}
	
	if(Alloy.Globals.playerThatPressQuestion == 2){
		Alloy.Globals.player02CorrectAnswers = Alloy.Globals.player02CorrectAnswers + 1;
	}
	
	if(Alloy.Globals.playerThatPressQuestion == 3){
		Alloy.Globals.player03CorrectAnswers = Alloy.Globals.player03CorrectAnswers + 1;
	}
	
	if(Alloy.Globals.playerThatPressQuestion == 4){
		Alloy.Globals.player04CorrectAnswers = Alloy.Globals.player04CorrectAnswers + 1;
	}
	
	
	if(Alloy.Globals.question < totalQuestionsInPlay){
		var questionView = Alloy.createController("card").getView();
		
		if(OS_IOS){
			setTimeout(function(){
				questionView.open({
					transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
				});
			},Alloy.Globals.secondsToWaitQuestion);	
		}else{
			setTimeout(function(){
				questionView.open();
			},Alloy.Globals.secondsToWaitQuestion);			
		}			
		
	}else{
		
		if(!OS_IOS){
			$.answer.close();
		}		
		
		var winners = Alloy.createController("winnersboard").getView();		
		
		if(OS_IOS){
			setTimeout(function(){
				winners.open({
					transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
				});
			},Alloy.Globals.secondsToWaitQuestion);	
		}else{
			setTimeout(function(){
				winners.open();
			},Alloy.Globals.secondsToWaitQuestion);			
		}		
				
	}				
}
