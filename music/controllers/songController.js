//Sean Shaughnessy songController.js

import req from "express/lib/request";
import res from "express/lib/response";
const {http} = require("../utils");

const getSongs = (req, res, next) => {
    res.status(http['good']['ok'])
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Here are the songs.'})
}

const createSong = (req, res, next) => {
    res.status(http['good']['created'])
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Song created.'})
}

const putSong = (req, res, next) => {
    res.status(http['good']['ok'])
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Song modified.'})
}

const deleteSong = (req, res, next) => {
    res.status(http['good']['noContent'])
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Song deleted.'})
}

module.exports = {
    getSongs,
    createSong,
    putSong,
    deleteSong
}