function addPlayer(){
	if(Alloy.Globals.activeTeamPlayers == 4){
		alert("Solo se permite hasta 4 jugadores");
	}else{
		Alloy.Globals.activeTeamPlayers = Alloy.Globals.activeTeamPlayers + 1;
		
		if(Alloy.Globals.activeTeamPlayers == 3){
			$.player03View.visible = true;
		}
		
		if(Alloy.Globals.activeTeamPlayers == 4){
			$.player04View.visible = true;
		}	
	}
}

function deletePlayer(){
	if(Alloy.Globals.activeTeamPlayers == 4){
		$.player04View.visible = false;
		$.player04Name.value = "Jugador 4";
		Alloy.Globals.activeTeamPlayers = Alloy.Globals.activeTeamPlayers - 1;
	}else if(Alloy.Globals.activeTeamPlayers == 3){
		$.player03View.visible = false;
		$.player03Name.value = "Jugador 3";
		Alloy.Globals.activeTeamPlayers = Alloy.Globals.activeTeamPlayers - 1;
	}else if(Alloy.Globals.activeTeamPlayers == 2){
		alert("Se necesita tener un mínimo de 2 jugadores");
	}	
}

function play(){
	Alloy.Globals.player01Name = $.player01Name.value;
	Alloy.Globals.player02Name = $.player02Name.value;
	Alloy.Globals.player03Name = $.player03Name.value;
	Alloy.Globals.player04Name = $.player04Name.value;	
		
	if(OS_IOS){
		
	}else{
		$.playersWindow.close();	
	}	
	var playView = Alloy.createController("card").getView();
	playView.open();
}

function back(){		
	if(OS_IOS){
		
	}else{
		$.playersWindow.close();	
	}	
	
	
	var homeView = Alloy.createController("rulesTeam").getView();
	homeView.open();
}