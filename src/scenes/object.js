import { k } from "../main"

export function renderObject(roadSpeed) {
    const lanePlacement = [
        575,
        650,
        725
    ]

    const stillObject = k.add([
        k.sprite("cone"),
        k.scale(0.2),
        k.area({ shape: new Polygon([vec2(280, 20), vec2(280, 120), vec2(-100, 120), vec2(-100, 20)]) }),
        k.anchor("center"),
        k.pos(1030 ,lanePlacement[Math.floor(Math.random()*3)]),
        k.layer("objects"),
    ])

    k.onUpdate(() => {
        stillObject.move(-roadSpeed, 0)
        stillObject.pos.x < 0 && stillObject.destroy()
    })

}