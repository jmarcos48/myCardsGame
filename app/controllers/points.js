var args = arguments[0] || {};

function nextQuestion(){
	if(Alloy.Globals.question < 10){
		var questionView = Alloy.createController("card").getView();
		questionView.open({
			transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	}else{
		var winners = Alloy.createController("winnersboard").getView();
		winners.open({
			transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	}
}