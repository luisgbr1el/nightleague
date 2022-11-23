const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    TeamId: Number,
    TeamName: String,
    GameName: String,
    Wins: Number,
    Edition: Number,
    Players: [ String, String, String, String, String ]
});

const MessageModel = mongoose.model('teams', TeamSchema);
export default MessageModel;