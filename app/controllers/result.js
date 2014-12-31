var args = arguments[0] || {};

if(args.correct >= 0 && args.correct <= 3){
	$.resultBoard.backgroundImage = "/images/background/" + Alloy.Globals.subsidiaryCode + "/single_keepgoing.png";
}else if(args.correct >= 4 && args.correct <= 6){
	$.resultBoard.backgroundImage = "/images/background/" + Alloy.Globals.subsidiaryCode + "/single_ok.png";
}else if(args.correct >= 7 && args.correct <= 9){
	$.resultBoard.backgroundImage = "/images/background/" + Alloy.Globals.subsidiaryCode + "/single_excellent.png";
}else if(args.correct == 10){
	$.resultBoard.backgroundImage = "/images/background/" + Alloy.Globals.subsidiaryCode + "/single_congrats.png";
}

function playAgain(){
	var playersView = Alloy.createController("index").getView();
	playersView.open();
}


var winnerPoints = Ti.UI.createLabel({
  color: 'pink',
  font: { fontSize:50 },
  fontFamily:'Lucida Grande-Bold',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE,
  text: args.correct + " puntos",
  left:"80",
  top:"150"
});

$.resultBoard.add(winnerPoints);
