class Track {
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
            ctx.stroke();

            // Draw a parallel line to represent the track width
            let widthOffset = 40; // Adjust for the track width
            ctx.beginPath();
            ctx.moveTo(x1, y1 + widthOffset);
            ctx.lineTo(x2, y2 + widthOffset);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";
            ctx.stroke();
        }

        function generateCoordinates() {
            let x1 = 0;
            let y1 = canvas.height / 2;
            let total_distance = 0;

            let amplitude = 50;
            let wavelength = 100; // Adjust for the length of each wave
            let frequency = 0.1; // Adjust for the frequency of waves

            while (total_distance <= 10000) {
                let x2 = total_distance;
                let y2 = y1 + amplitude * Math.sin(x2 / wavelength * 2 * Math.PI * frequency);

                lineGenerator(x1, y1, x2, y2);

                x1 = x2;
                y1 = y2;
                total_distance += wavelength; // Adjust for the length of each wave
            }
        }

        generateCoordinates();
    }
}

let track = new Track();
track.generateTrack();
