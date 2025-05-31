import { k } from "../main"

export function renderTruck(pos) {
    const truck = k.add([
        k.sprite("truck"),
        k.scale(0.5),
        k.area({ shape: new Polygon([vec2(280, 20), vec2(280, 120), vec2(-100, 120), vec2(-100, 20)]) }),
        k.anchor("center"),
        k.pos(pos),
    ])

    truck.onKeyPressRepeat("down", () => {
        truck.pos.y <= 705 && truck.moveBy(0, 5)
        console.log(truck.pos.y)
    })

    truck.onKeyPressRepeat("up", () => {
        truck.pos.y >= 555 && truck.moveBy(0, -5)
        console.log(truck.pos.y)
    })

    truck.onCollide(() => {
        k.addKaboom(truck.pos, {scale: 1.3, speed: 0.5})
        truck.destroy()
        setTimeout(() => {
            k.go('Main Menu')
        }, 4000)
    })
}