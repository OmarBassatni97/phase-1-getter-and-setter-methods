// Add your Circle class here
class Circle {
#diameter
#circumference
#area
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.#diameter
    }
    get circumference(){
        return this.#circumference
    }
    get area(){
        return this.#area
    }

    set diameter(radius){
        this.#diameter = radius*2
    }

    set circumference(diameter){
        this.#circumference = Math.PI * diameter
    }

    set area (radius){
        this.#area = Math.PI *(radius*radius)
    }
}