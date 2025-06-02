import { renderTruck } from "../entities/truck";
import level1 from "./level1";
import { k } from "../main";

const cityWidth = 463;
const cityScale = 2.5;
const roadWidth = 1080;
const roadScale = 0.8;
const roadHeight = 480;
const gameSpeed = 100;
export let roadSpeed = 300;
export let music;

export default function mainMenu() {
	const cityFrames = [
		k.add([k.sprite("city"), k.scale(cityScale), k.pos()]),
		k.add([
			k.sprite("city"),
			k.scale(cityScale),
			k.pos(cityWidth * cityScale, 0),
		]),
	];

	const roadFrames = [
		k.add([k.sprite("road"), k.scale(roadScale), k.pos(0, roadHeight)]),
		k.add([
			k.sprite("road"),
			k.scale(roadScale),
			k.pos(roadWidth * roadScale, roadHeight),
		]),
		k.add([
			k.sprite("road"),
			k.scale(roadScale),
			k.pos(roadWidth * roadScale * 2, roadHeight),
		]),
	];

	k.add([
		k.text("City Route", { size: 90 }),
		k.color("000000"),
		k.pos(k.center().x, 250),
		k.anchor("center"),
	]);

	k.add([
		k.text("Press Space To Start", { size: 35 }),
		k.color("000000"),
		k.pos(k.center().x, 330),
		k.anchor("center"),
	]);

	renderTruck(k.vec2(200, 540), false);

	k.onUpdate(() => {
		if (cityFrames[1].pos.x < 0) {
			cityFrames[0].moveTo(
				cityFrames[1].pos.x + cityWidth * cityScale,
				0
			);
			cityFrames.reverse();
		}

		if (roadFrames[1].pos.x < 0) {
			roadFrames[0].moveTo(
				roadFrames[2].pos.x + roadWidth * roadScale,
				roadHeight
			);
			roadFrames.push(roadFrames.shift());
		}

		cityFrames[0].move(-gameSpeed, 0);
		cityFrames[1].move(-gameSpeed, 0);
		roadFrames[0].move(-roadSpeed, 0);
		roadFrames[1].move(-roadSpeed, 0);
		roadFrames[2].move(-roadSpeed, 0);
	});

	music = k.play("song", { loop: true, volume: 0.7 });

	k.onKeyPress("space", () => {
		k.go("level 1");
        music.stop()
	});
}
