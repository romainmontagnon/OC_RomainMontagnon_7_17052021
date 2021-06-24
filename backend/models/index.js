// ----------------------------------------
//synchro des tables

const User = require('../models/user');
const Post = require('../models/post');
const Com = require('../models/com');
const { response } = require('express');


// fonction async avec await ???

Post.belongsTo(User);
Com.belongsTo(User);
Post.hasMany(Com);

User.sync( /*{ alter: true }*/ )
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    });
Post.sync( /*{alter:true}*/ )
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    });
Com.sync( /*{alter:true}*/ )
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    });

module.exports = { User, Post, Com };