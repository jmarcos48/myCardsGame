var fontSizePoints = 20;
var topForPoints = "2";

if(OS_IOS){
	fontSizePoints = 20;
	topForPoints = "2";	
}else{
	fontSizePoints = 18;
	topForPoints = "0";
}

var winner01Name = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:36 },
  fontFamily:'Lucida Grande-Bold',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE,
  text: Alloy.Globals.player01Name,
  left:"5"
});

var winner01Points = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:fontSizePoints },
  fontFamily:'Lucida Grande-Bold',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE,
  text: Alloy.Globals.player01CorrectAnswers + " puntos",
  left:"5",
  top:topForPoints
});

$.winner01.add(winner01Name);
$.winner01.add(winner01Points);

var winner02Name = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:36 },
  fontFamily:'Lucida Grande-Bold',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE,
  text: Alloy.Globals.player02Name,
  left:"5"
});

var winner02Points = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:fontSizePoints },
  fontFamily:'Lucida Grande-Bold',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE,
  text: Alloy.Globals.player02CorrectAnswers + " puntos",
  left:"5",
  top:topForPoints
});

$.winner02.add(winner02Name);
$.winner02.add(winner02Points);

var winner03Name = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:36 },
  fontFamily:'Lucida Grande-Bold',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE,
  text: Alloy.Globals.player03Name,
  left:"5"
});

var winner03Points = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:fontSizePoints },
  fontFamily:'Lucida Grande-Bold',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE,
  text: Alloy.Globals.player03CorrectAnswers + " puntos",
  left:"5",
  top:topForPoints
});

$.winner03.add(winner03Name);
$.winner03.add(winner03Points);

var winner04Name = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:36 },
  fontFamily:'Lucida Grande-Bold',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE,
  text: Alloy.Globals.player04Name,
  left:"5"
});

var winner04Points = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:fontSizePoints },
  fontFamily:'Lucida Grande-Bold',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE,
  text: Alloy.Globals.player04CorrectAnswers + " puntos",
  left:"5",
  top:topForPoints
});

$.winner04.add(winner04Name);
$.winner04.add(winner04Points);

if(Alloy.Globals.activeTeamPlayers == 3){
	$.winner03.visible = true;
}

if(Alloy.Globals.activeTeamPlayers == 4){
	$.winner03.visible = true;
	$.winner04.visible = true;
}

function playAgain(){
		
	if(!OS_IOS){
		$.board.close();
	}
	
	var playersView = Alloy.createController("index").getView();
	playersView.open();
}

