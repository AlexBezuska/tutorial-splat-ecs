"use strict";

module.exports = function(ecs, data) {
	ecs.addEach(function(player, elapsed) { // eslint-disable-line no-unused-vars
		var playerFacing = data.entities.get(player, "facing");
		var playerAnimation = data.entities.get(player, "animation");
		var timers = data.entities.get(player, "timers");

		// if( data.input.button("up")
		// || data.input.button("right")
		// || data.input.button("down")
		// || data.input.button("left")
		// || data.input.button("action") ){
		// 	playerAnimation.speed = 1;
		// }else{
		// 	playerAnimation.speed = 0;
		// }

		if(playerFacing === "down"){
			if(timers.action.running){
				playerAnimation.name = "player-action-down";
			}else if(data.input.button("down")){
				playerAnimation.name = "player-down";
				playerAnimation.speed = 1;
			}else{
				playerAnimation.name = "player-idle-down";
				playerAnimation.speed = 1;
			}
		}
		if(playerFacing === "up"){
			if(timers.action.running){
				playerAnimation.name = "player-action-up";
			}else if(data.input.button("up")){
				playerAnimation.name = "player-up";
				playerAnimation.speed = 1;
			}else{
				playerAnimation.name = "player-idle-down";
				playerAnimation.speed = 1;
			}
		}
		if(playerFacing === "right"){
			if(timers.action.running){
				playerAnimation.name = "player-action-right";
			}else if(data.input.button("right")){
				playerAnimation.name = "player-right";
				playerAnimation.speed = 1;
			}else{
				playerAnimation.name = "player-idle-down";
				playerAnimation.speed = 1;
			}
		}
		if(playerFacing === "left"){
			if(timers.action.running){
				playerAnimation.name = "player-action-left";
			}else if(data.input.button("left")){
				playerAnimation.name = "player-left";
				playerAnimation.speed = 1;
			}else{
				playerAnimation.name = "player-idle-down";
				playerAnimation.speed = 1;
			}
		}
	}, "player");
};
