//synchro des tables

const User = require('../models/user');
const Post = require('../models/post');
const Com = require('../models/com');


// fonction async avec await ???

Post.belongsTo(User);

// Com.belongTo(User);
// Post.hasMany(Com);

User.sync({alter:true});
Post.sync({alter:true});
Com.sync({alter:true});

module.exports = {User, Post, Com};