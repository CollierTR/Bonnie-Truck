import { k } from "../main";
import { count, resetRoadSpeed, setCount } from "./level1";

export const roadSpeed = 300;
export let music;

export default function gameOver() {
	k.setBackground("#000000");

	k.add([
		k.text("Game Over!", { size: 90 }),
		k.color("ff0000"),
		k.pos(k.center().x, 300),
		k.anchor("center"),
	]);

	k.add([
		k.text(`score: ${count}`, { size: 35 }),
		k.color("ff0000"),
		k.pos(k.center().x, 380),
		k.anchor("center"),
	]);

	k.add([
		k.text("Press Space To play again", { size: 35 }),
		k.color("ffffff"),
		k.pos(k.center().x, 500),
		k.anchor("center"),
	]);

	setTimeout(() => {
        k.play("stop sign", { loop: false, volume: 1 });
    }, 1000)

	k.onKeyPress("space", () => {
		setCount();
        resetRoadSpeed();
		k.go("Main Menu");
	});
}
