class Track {
    // the racetrack should be randomly generated
    constructor() {
        this.length = 1000;
        this.width = 4;
        this.turns = 8;
    }

    generateTrack() {
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");

        function lineGenerator(x1, y1, x2, y2) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";
            ctx.closePath();
            ctx.stroke();
        }

        function co_ordinate_Operations(x1, y1, x2, y2, angle) {
            let direction_angle = angle; // Hold the angle in radian where the line need to move;
            let offset = 50; // distance apart from 2 lines

            // calculate the end point
            let theta_radians = direction_angle * Math.PI / 180;
            let dx = 100 * Math.cos(theta_radians);
            let dy = 100 * Math.sin(theta_radians);
            x2 = x1 + dx;
            y2 = y1 + dy;

            // Calculate the perpendicular vector to determine the direction of offset
            dx = x2 - x1;
            dy = y2 - y1;
            let length = Math.sqrt(dx * dx + dy * dy);
            let perpendicularX = -dy / length * offset;
            let perpendicularY = dx / length * offset;

            // Line 1
            x1 = x1 - perpendicularX;
            y1 = y1 - perpendicularY;
            x2 = x2 - perpendicularX;
            y2 = y2 - perpendicularY;

            lineGenerator(x1, y1, x2, y2);

            //Line 2
            x1 = x1 + perpendicularX;
            y1 = y1 + perpendicularY;
            x2 = x2 + perpendicularX;
            y2 = y2 + perpendicularY;

            lineGenerator(x1, y1, x2, y2);

            return [x2, y2]
        }

        function generateCo_ordinates() {
            let x1 = 0;
            let x2 = 0;
            let y1 = (canvas.height) / 2;
            let y2 = y1;
            let angle = 0;
            let total_distance = 0;

            let amplitude = 50;
            let x = 0;

            do {
                [x1, y1] = co_ordinate_Operations(x1, y1, x2, y2, angle);

                //sine wave
                y2 = Math.sin(x);
                x2 = x;
                total_distance = total_distance + 20
                x = x + 3;
                // angle = Math.floor(Math.random() * 2 * 3.14)
            } while (total_distance <= 1000)

        }

        generateCo_ordinates();
    }

}

let track = new Track();
track.generateTrack();