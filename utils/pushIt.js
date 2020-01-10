const path = require("path");
const sound = require("sound-play");

const file = "Push_It.mp3";
const filePath = path.join(__dirname, file);

sound.play(filePath);
