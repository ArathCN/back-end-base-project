import { Router } from "express";
//Importar los controladores

const testRouter = Router();

testRouter.get('/', function(req, res) {
    res.json({ mensaje: '¡Hola Mundo!' })   
})
  
testRouter.get('/cervezas', function(req, res) {
    res.json({ mensaje: '¡A beber cerveza!' })  
})

testRouter.post('/', function(req, res) {
    res.json({ mensaje: 'Método post' })   
})

testRouter.delete('/', function(req, res) {
    res.json({ mensaje: 'Método delete' })  
})

export {testRouter};