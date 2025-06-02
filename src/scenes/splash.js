import { k } from "../main";

export default function splash() {
	k.setBackground("000000");

    k.add([
        k.sprite("bobby"),
        k.pos(k.center().x, 300),
        k.scale(0.5),
        k.anchor("center")
    ])

	k.add([
		k.text("Bobby Basil Studios", { size: 70 }),
		k.color("449d34"),
		k.pos(k.center().x, 500),
		k.anchor("center"),
	]);


	k.add([
		k.text("Press Space To Continue", { size: 35 }),
		k.color("ffffff"),
		k.pos(k.center().x, 600),
		k.anchor("center"),
	]);

	k.onKeyPress("space", () => {
		k.go("Main Menu");
	});
}
