import { Schema, model as Model } from 'mongoose';

export const userSchema: Schema = new Schema({
    displayName: {
        type: String,
        default: 'NA'
    },
    email: {
        type: String,
        required: true,
    },
    socialId: {
        type: String,
        default: 'NA'
    },
    givenName: {
        type: String,
        default: 'NA'
    },
    deviceToken: {
        type: String,
        default: null
    }
}, { timestamps: true });