if(Alloy.Globals.subsidiaryCode == "AR"){
	$.rulesTeam.backgroundImage = "/images/background/AR/rules_team.png";
}else{
	$.rulesTeam.backgroundImage = "/images/background/MX/rules_team.jpg";
}


function play(){
	
	if(OS_IOS){
		
	}else{
		$.rulesTeam.close();	
	}		
	
	var playersView = Alloy.createController("players").getView();
	playersView.open();
}

function back(){
	
	if(OS_IOS){
		
	}else{
		$.rulesTeam.close();	
	}	
	
	var homeView = Alloy.createController("index").getView();
	homeView.open();
}