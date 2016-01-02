"use strict";
var random = require("../../random");

module.exports = function(ecs, data) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var velocity = data.entities.get(entity, "velocity");
		var speed = data.entities.get(entity, "speed");
		var timers = data.entities.get(entity, "timers");
		velocity.x = 0;
		velocity.y = 0;
		if (data.input.button("left")) {
			velocity.x = -speed;
			data.entities.set(entity, "facing", "left");
		}
		if (data.input.button("right")) {
			velocity.x = speed;
			data.entities.set(entity, "facing", "right");
		}
		if (data.input.button("up")) {
			velocity.y = -speed;
			data.entities.set(entity, "facing", "up");
		}
		if (data.input.button("down")) {
			velocity.y = speed;
			data.entities.set(entity, "facing", "down");
		}
		if (data.input.buttonPressed("action") && !timers.action.running) {
			var swingNoises = data.entities.get(entity, "swing-noises");
			data.sounds.play(random.from(swingNoises));
			timers.action.running = true;
		}
	}, "player");
};
