import mongoose from 'mongoose';
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String, required: 'Enter a first name'
    },
    lastName: {
        type: String, required: 'Please enter the last name'
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        }
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

ContactSchema.plugin(uniqueValidator);

