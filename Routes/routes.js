const {Router} = require("express");
const createPost = require("../Controllers/createPost");
const register =require('../Controllers/register');
const login = require('../Controllers/login');
const getPosts = require('../Controllers/getPosts');
const getPostById = require('../Controllers/getPostById');
const getUserById = require('../Controllers/getUserById');
const getAllUsers = require('../Controllers/getAllUsers');
const updatePost = require('../Controllers/updatePost');
const updateUser = require('../Controllers/updateUser');
const deletePost = require('../Controllers/deletePost');
const logOut = require('../Controllers/logOut');
const verifyToken = require('../Validators/verifyToken');
const getPostByBloggerId = require('../Controllers/getPostByBloggerId');


const route= Router();

//the POST METHODS
route.post('/api/auth/register', register);
route.post('/api/auth/login', login);
route.post('/api/create_posts',verifyToken, createPost);

//the GET METHODS
route.get('/api/posts',verifyToken, getPosts);
route.get('/api/posts/:id',verifyToken, getPostById);
route.get('/api/users/:id',verifyToken, getUserById);
route.get('/api/users',verifyToken, getAllUsers);
route.get('/api/auth/logout', verifyToken, logOut);
route.get('/post/:bloggerId',verifyToken, getPostByBloggerId);



//the PUT METHODS
route.put('/api/post/:id',verifyToken, updatePost);
route.put('/api/user/:id',verifyToken, updateUser);

//the DELETE METHOD
route.delete('/api/post/:id',verifyToken, deletePost );

module.exports=route;