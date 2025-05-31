import kaplay from "kaplay";
import level1 from "./scenes/level1";
import mainMenu from "./scenes/mainMenu";

export const k = kaplay({
    width: 1070,
    height: 800,
});

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSprite("truck", "sprites/truck.png");
k.loadSprite("brokenTruck", "sprites/burpeeTruck.png");
k.loadSprite("city", "backgrounds/city.webp");
k.loadSprite("road", "backgrounds/myRoad.jpg");
k.loadSprite("cone", "sprites/cone.png");

k.scene("level 1", level1)
k.scene("Main Menu", mainMenu)
k.go("Main Menu")


