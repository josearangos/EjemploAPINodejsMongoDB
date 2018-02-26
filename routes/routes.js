'use strict' // convencio de EMC6
const express = require('express');

//controlador
const wordCtrl= require('../controllers/wordCRUD');
const api=express.Router();

api.get('/words',wordCtrl.getWords);
api.get('/word/:wordId',wordCtrl.getWord);
api.post('/word',wordCtrl.insertWord);
api.delete('/word/:wordId',wordCtrl.deleteWord);
api.put('/word/:wordId',wordCtrl.updateWord);

module.exports=api;

