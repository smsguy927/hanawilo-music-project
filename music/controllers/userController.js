//Sean Shaughnessy userController.js

import req from "express/lib/request";
import res from "express/lib/response";
const {http} = require("../utils");
const getUsers = (req, res, next) => {
    res.status(http['good']['ok'])
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Here are the users.'})
}

const createUser = (req, res, next) => {
    res.status(http['good']['created'])
        .setHeader('Content-Type', 'application/json')
        .json({message: 'User created.'})
}

const putUser = (req, res, next) => {
    res.status(http['good']['ok'])
        .setHeader('Content-Type', 'application/json')
        .json({message: 'User modified.'})
}

const deleteUser = (req, res, next) => {
    res.status(http['good']['noContent'])
        .setHeader('Content-Type', 'application/json')
        .json({message: 'User deleted.'})
}

module.exports = {
    getUsers,
    createUser,
    putUser,
    deleteUser
}