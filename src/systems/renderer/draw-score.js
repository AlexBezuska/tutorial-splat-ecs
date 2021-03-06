"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function harvest(player, context) { // eslint-disable-line no-unused-vars
		var score = data.entities.get(player, "score");
		var total = data.entities.get(2, "totalPods");

		var scorebarBg = 11;
		var scorebarBgPosition = data.entities.get(scorebarBg, "position");
		var scorebarBgSize = data.entities.get(scorebarBg, "size");
		var scorebarScore = 12;
		var scorebarScorePosition = data.entities.get(scorebarScore, "position");
		var scorebarScoreSize = data.entities.get(scorebarScore, "size");

		drawRectangle(data, context, scorebarBg);

		scorebarScoreSize.height =  scorebarBgSize.height * (score / total);
		scorebarScorePosition.y = (scorebarBgPosition.y + scorebarBgSize.height) - scorebarScoreSize.height;
		drawRectangle(data, context, scorebarScore);

		if(score === total){
			console.log("you won");
		}

	} ,    "player");
};

function drawRectangle(data, context, entity){
	var position = data.entities.get(entity, "position");
	var size = data.entities.get(entity, "size");
	context.fillStyle = data.entities.get(entity, "color");
	context.fillRect(position.x, position.y, size.width, size.height);
}
