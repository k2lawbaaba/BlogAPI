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
const verifyUserByTokenId = require('../Validators/verifyToken');


const route= Router();

//the POST METHODS
route.post('/api/auth/register', register);
route.post('/api/auth/login', login);
route.post('/api/create_posts',verifyUserByTokenId, createPost);

//the GET METHODS
route.get('/api/posts',verifyUserByTokenId, getPosts);
route.get('/api/posts/:id',verifyUserByTokenId, getPostById);
route.get('/api/users/:id', getUserById);
route.get('/api/users', getAllUsers);
route.get('/api/auth/logout', verifyUserByTokenId, logOut);

//the PUT METHODS
route.put('/api/post/:id',verifyUserByTokenId, updatePost);
route.put('/api/users/:id', updateUser);

//the DELETE METHOD
route.delete('/api/post/:id',verifyUserByTokenId, deletePost );

module.exports=route;