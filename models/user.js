const mongoose = require("mongoose")
const express = require("express")

const UserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    username: String,
    email: String,
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: String,
            lng: String
        },
        // How to handle an array of phonenumbers?
        // phonenumbers: [],
        website: String
    }
})

module.exports = mongoose.model('User', UserSchema)
