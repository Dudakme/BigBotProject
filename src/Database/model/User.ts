import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        min: 6
    },
    job: {
        type: String,
        required: true,
    },
    Coins: {
        type: Number,
        required: true,
        default: 100
    },
    inventory: {
        type: Array,
        required: true,
        default: ['Played the Game!']
    },
    Health: {
        type: Number,
        required: true,
        default: 100,
        max: 100
    },
    Hunger: {
        type: Number,
        required: true,
        default: 8,
        max: 10
    },
    MP: {
        type: Number,
        required: true,
        default: 5,
        max: 1000
    },
    Level: {
        type: Number,
        required: true,
        default: 1,
        max: 100
    },
    Quest: {
        type: Array<string>,
        required: true,
        default: []
    }

});

export default mongoose.model('User', userSchema);