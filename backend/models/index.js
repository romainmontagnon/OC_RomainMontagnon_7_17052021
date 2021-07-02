// ----------------------------------------
//synchro des tables

const User = require('../models/user');
const Post = require('../models/post');
const Com = require('../models/com');
const { response } = require('express');

//Creation de clefs etrangere
// post creation de clef etrangere vers user
Post.belongsTo(User, { onDelete: 'cascade' });
// com creation de clef etrangere vers user
Com.belongsTo(User, { onDelete: 'cascade' });
// post creation de clef etrangere de com vers post
Post.hasMany(Com, { onDelete: 'cascade' });

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