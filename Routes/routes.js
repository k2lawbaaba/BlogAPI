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
const deletePost = require('../Controllers/deletePost')


const route= Router();

//the POST METHODS
route.post('/api/auth/register', register);
route.post('/api/auth/login', login);
route.post('/api/posts', createPost);

//the GET METHODS
route.get('/api/posts', getPosts);
route.get('/api/posts/:id', getPostById);
route.get('/api/users/:id', getUserById);
route.get('/api/users', getAllUsers);

//the PUT METHODS
route.put('/api/post/:id', updatePost);
route.put('/api/users/:id', updateUser);

//the DELETE METHOD
route.delete('/api/post/:id',deletePost );

module.exports=route;