import { k } from "../main";

export let truckIsAlive = true;

export function renderTruck(pos, playSound = true) {
	const truck = k.add([
		k.sprite("truck"),
		k.scale(0.5),
		k.area({
			shape: new Polygon([
				vec2(280, 20),
				vec2(280, 120),
				vec2(-100, 120),
				vec2(-100, 20),
			]),
		}),
		k.anchor("center"),
		k.pos(pos),
        k.layer("truck"),
	]);

	truck.onKeyPressRepeat("down", () => {
		truck.pos.y <= 705 && truck.moveBy(0, 6);
		console.log(truck.pos.y);
	});

	truck.onKeyPressRepeat("up", () => {
		truck.pos.y >= 555 && truck.moveBy(0, -6);
		console.log(truck.pos.y);
	});

	const makeTruckSound = () => {
        if (playSound) {
            return k.play("truck", { loop: true, volume: 0.1, detune: -200 });
        }

    }

    let truckSound = makeTruckSound()

	truck.onCollide(() => {
		k.addKaboom(truck.pos, { scale: 1.3, speed: 0.5 });
		truck.destroy();
		truckSound?.stop();
        k.play("crash", { loop: false, speed: 0.5 })
		setTimeout(() => {
			k.go("game over");
		}, 1000);
		truckIsAlive = false;
	});
}
