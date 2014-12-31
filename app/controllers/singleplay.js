var args = {
	id: 0,
	correct: 0
};

Alloy.Globals.singleQuestion = Alloy.Globals.singleQuestion+ 1;
var questionRandom = Math.floor(Math.random()*Alloy.Globals.totalSingleQuestions);
Alloy.Globals.isQuestionBlocked = false;

Ti.API.info("Random single: " + questionRandom);

var results = [];
var results2 = [];
	
try{
	var db = Titanium.Database.open(Alloy.Globals.dataBaseName);
	var rows = db.execute("SELECT * FROM single_question where id_deck = " + Alloy.Globals.deckToPlay + " and id_question = " + questionRandom);
	
	while (rows.isValidRow()) {          	                   
	          results.push({
	            idQuestion: rows.fieldByName('id_question'),
	            question: rows.fieldByName('question'),
	            correctAnswer: rows.fieldByName('correct_answer'),
	          });
	         
	          rows.next();
	}
	rows.close();	
	
	var rows2 = db.execute("SELECT * FROM single_question_answer where id_deck = " + Alloy.Globals.deckToPlay + " and id_question = " + questionRandom);	
	
	while (rows2.isValidRow()) {          	                   
	          results2.push({
	            idAnswer: rows2.fieldByName('id_answer'),
	            answer: rows2.fieldByName('answer')
	          });
	         
	          rows2.next();
	}
	rows2.close();
	db.close();	
	
}catch(e){
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

function option01Clicked(){
	if(!Alloy.Globals.isQuestionBlocked){
		Alloy.Globals.isQuestionBlocked = true;
		if(correctOption == 1){
			var player = Ti.Media.createSound({url:"/audios/correct.mp3"});
			player.play();
					
			$.option01.backgroundImage="/images/background/correctAnswer01.png";
			Alloy.Globals.singlePlayerCorrectAnswers = Alloy.Globals.singlePlayerCorrectAnswers + 1;
		}else{
			var player = Ti.Media.createSound({url:"/audios/incorrect.mp3"});
			player.play();	
				
			$.option01.backgroundImage="/images/background/wrongAnswer01.png";
			
			if(correctOption == 2){
				$.option02.backgroundImage="/images/background/correctAnswer02.png";
			}
			if(correctOption == 3){
				$.option03.backgroundImage="/images/background/correctAnswer01.png";
			}
			if(correctOption == 4){
				$.option04.backgroundImage="/images/background/correctAnswer02.png";
			}		
		}		
	}	
}

function option02Clicked(){
	if(!Alloy.Globals.isQuestionBlocked){
		Alloy.Globals.isQuestionBlocked = true;
		if(correctOption == 2){
			var player = Ti.Media.createSound({url:"/audios/correct.mp3"});
			player.play();
					
			$.option02.backgroundImage="/images/background/correctAnswer02.png";
			Alloy.Globals.singlePlayerCorrectAnswers = Alloy.Globals.singlePlayerCorrectAnswers + 1;
		}else{
			var player = Ti.Media.createSound({url:"/audios/incorrect.mp3"});
			player.play();	
				
			$.option02.backgroundImage="/images/background/wrongAnswer02.png";
			
			if(correctOption == 1){
				$.option01.backgroundImage="/images/background/correctAnswer01.png";
			}
			if(correctOption == 3){
				$.option03.backgroundImage="/images/background/correctAnswer01.png";
			}
			if(correctOption == 4){
				$.option04.backgroundImage="/images/background/correctAnswer02.png";
			}		
		}
	}
	
}

function option03Clicked(){
	if(!Alloy.Globals.isQuestionBlocked){
		Alloy.Globals.isQuestionBlocked = true;
		
		if(correctOption == 3){
			var player = Ti.Media.createSound({url:"/audios/correct.mp3"});
			player.play();
					
			$.option03.backgroundImage="/images/background/correctAnswer01.png";
			Alloy.Globals.singlePlayerCorrectAnswers = Alloy.Globals.singlePlayerCorrectAnswers + 1;
		}else{
			var player = Ti.Media.createSound({url:"/audios/incorrect.mp3"});
			player.play();	
				
			$.option03.backgroundImage="/images/background/wrongAnswer01.png";
			
			if(correctOption == 1){
				$.option01.backgroundImage="/images/background/correctAnswer01.png";
			}
			if(correctOption == 2){
				$.option02.backgroundImage="/images/background/correctAnswer02.png";
			}
			if(correctOption == 4){
				$.option04.backgroundImage="/images/background/correctAnswer02.png";
			}		
		}		
	}	
}

function option04Clicked(){
	if(!Alloy.Globals.isQuestionBlocked){
		Alloy.Globals.isQuestionBlocked = true;
		if(correctOption == 4){
			var player = Ti.Media.createSound({url:"/audios/correct.mp3"});
			player.play();
					
			$.option04.backgroundImage="/images/background/correctAnswer02.png";
			Alloy.Globals.singlePlayerCorrectAnswers = Alloy.Globals.singlePlayerCorrectAnswers + 1;
		}else{
			var player = Ti.Media.createSound({url:"/audios/incorrect.mp3"});
			player.play();	
				
			$.option04.backgroundImage="/images/background/wrongAnswer02.png";
			
			if(correctOption == 1){
				$.option01.backgroundImage="/images/background/correctAnswer01.png";
			}
			if(correctOption == 2){
				$.option02.backgroundImage="/images/background/correctAnswer02.png";
			}
			if(correctOption == 3){
				$.option03.backgroundImage="/images/background/correctAnswer01.png";
			}		
		}		
	}
	
}

function nextQuestion(){	
	
	if(Alloy.Globals.singleQuestion < Alloy.Globals.totalTeamQuestions_1players){		
		var questionView = Alloy.createController("singleplay").getView();
		
		if(OS_IOS){
			questionView.open({
				transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
			});				
		}else{
			$.singlePlayer.close();
			questionView.open();
		}
		
	}else{
		args = {
			id: 0,
			correct: Alloy.Globals.singlePlayerCorrectAnswers
		};
		
		var winners = Alloy.createController("result", args).getView();
		
		if(OS_IOS){
			winners.open({
				transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
			});
		}else{
			$.singlePlayer.close();
			winners.open();
		}		
	}
}

function exitGame(){	
	
	var homeView = Alloy.createController("index").getView();
	
	if(OS_IOS){
		homeView.open({
			transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});		
	}else{
		$.singlePlayer.close();
		homeView.open();
	}	
}
