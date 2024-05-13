class Car {
    constructor(colorName) {
        this.fuel = 100;
        this.color = colorName;
        this.width = 10
        this.height = 10;
        this.position = [100, 300];

        this.speed = 0;
        this.acceleration = 0;
        this.maxSpeed = 100;
        this.friction = 0.02;
    }

    shape() {
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");

        ctx.fillStyle = this.color;
        ctx.fillRect(this.position[0], this.position[1], 20, 20);
        ctx.stroke();
    }

    start() {
        this.acceleration++;
    }

    break() {
        this.acceleration = this.acceleration - 1;
    }

    acclerate(rate) {
        // acceleration should have some limit on acceleration.
        this.acceleration = rate;
    }
}


let car1 = new Car("green");
car1.shape();