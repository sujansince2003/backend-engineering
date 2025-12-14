type Shape = ({ kind: "circle", radius: number } | { kind: "square", size: number } | { kind: "reactangle", size: number })

function area(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "square":
            return shape.size * shape.size
        default:
            const _exhaustive: never = shape
            return _exhaustive
    }
    // we have handled the circle and square but not reactangle so never type forced to update the switch so never type is necessary
}
let d: Shape = {
    kind: "circle",
    radius: 5
}
let result = area(d)
console.log(result)