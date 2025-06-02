import { renderTruck, truckIsAlive } from "../entities/truck";
import { k } from "../main";
import { renderObject } from "./object";

const cityWidth = 463;
const cityScale = 2.5;
const roadWidth = 1080;
const roadScale = 0.8;
const roadHeight = 480;
let gameSpeed = 100;
export let roadSpeed = 300;
export let count = 0;

export function setCount() {
	count = 0;
}

export function resetRoadSpeed() {
	roadSpeed = 300;
}

export default function level1() {
	// k.setLayers(
	// 	[
	// 		"background", // Lowest z-index
	// 		"road",
	// 		"objects",
	// 		"truck", // Highest z-index
	// 	],
	// 	"background"
	// );


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

	const counter = k.add([
		k.text("294", { size: 35 }),
		pos(30, 30),
		k.color("000000"),
	]);

	renderTruck(k.vec2(200, 540));

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

	// let truckSound = k.play("truck", { loop: true, volume: 0.1, detune: -200 })

	k.loop(1, () => {
		count++;
		counter.text = count;
		roadSpeed += 6;
		if (count % 2 === 0) renderObject(roadSpeed);
	});
}
