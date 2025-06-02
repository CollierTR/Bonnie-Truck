import kaplay from "kaplay";
import level1 from "./scenes/level1";
import gameOver from "./scenes/gameOver";
import mainMenu from "./scenes/mainMenu";
import splash from "./scenes/splash";

export let count = 0;

export const k = kaplay({
	width: 1070,
	height: 800,
});

k.setLayers(
	[
		"background", // Lowest z-index
		"road",
		"objects",
		"truck", // Highest z-index
	],
	"background"
);

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSprite("truck", "sprites/truck.png");
k.loadSprite("city", "backgrounds/city.webp");
k.loadSprite("road", "backgrounds/myRoad.jpg");
k.loadSprite("cone", "sprites/cone.png");
k.loadSprite("bobby", "sprites/bobby.png");
k.loadMusic("song", "sounds/music.wav");
k.loadMusic("truck", "sounds/truck.wav");
k.loadSound("crash", "sounds/crash.wav");
k.loadSound("stop sign", "sounds/stopSign.m4a");

k.scene("level 1", level1);
k.scene("Main Menu", mainMenu);
k.scene("game over", gameOver), k.scene("splash", splash), k.go("splash");
