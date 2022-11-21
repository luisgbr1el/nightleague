import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
    TeamId: Number,
    TeamName: String,
    GameName: String,
    Wins: Number,
    Edition: Number,
    Players: [ String, String, String, String, String ]
});

const MessageModel = module.exports = mongoose.models.teams || mongoose.model('teams', TeamSchema)