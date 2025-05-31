import { renderTruck } from "../entities/truck";
import { k } from "../main";
import { renderObject } from "./object";

const cityWidth = 463;
const cityScale = 2.5;
const roadWidth = 1080;
const roadScale = 0.8;
const roadHeight = 480;
const gameSpeed = 100;
export let roadSpeed = 300;

export default function level1() {
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

	let count = 0;
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

	k.loop(1, () => {
		count++;
		counter.text = count;
        roadSpeed += 4;
		if (count % 2 === 0) renderObject(roadSpeed);
		// if (count > 10 && roadSpeed <= 400) {
		// 	roadSpeed += 5;
		// }
		// if (count > 40 && roadSpeed <= 500) {
		// 	roadSpeed += 5;
		// }
	});
}
