

if(Alloy.Globals.subsidiaryCode == "AR"){
	$.rulesTeam.backgroundImage = "/images/background/AR/rules_single.png";
}else{
	$.rulesTeam.backgroundImage = "/images/background/MX/rules_single.jpg";
}

function play(){
	if(!OS_IOS){
		$.rulesTeam.close();
	}
		
	var playersView = Alloy.createController("singleplay").getView();
	playersView.open();
}

function back(){
	if(!OS_IOS){
		$.rulesTeam.close();
	}
		
	var homeView = Alloy.createController("index").getView();
	homeView.open();
}