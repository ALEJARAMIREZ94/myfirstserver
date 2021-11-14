/*//SERVIDORES WEB
//1.Lo requiero
let http = require("http");
let moment = require("moment");
//4.Puerto q lo va a escuchar y va a ser una cte .Declaro cte puerto
const PORT = 3000;
//2.Creo mi servidor
//let app = http.createServer();
//3.Envio callback  q por ahora es
let app = http.createServer((req,res)=> {
    let hour = moment().format("HH");
    //hour = 6;
    let sms = "";
    if(hour >= 6 && hour <= 12){
        sms = "Buenos dias"
    }else if(hour >= 13 && hour <= 19){
        sms = "Buenas tardes";
    }else{
        sms = "Buenas noches"
    }
    //res.end(`hola desde mi primer servidor.La hora es:  ${hour}`);
    res.end(`${sms}`);
    
});
//5.Le indico el puerto q lo va a escuchar q recibe un cb
app.listen(PORT,()=> {
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`);
});

//Ejercicio: Mensaje segun la hora
//instalo npm i moment y lo meto en una variable
//Servidor http en express: Lo requiero igual q con http
/*let express = require("express");
let app = express();
app.get(ruta('/',function(req,resp,next);
app.listen(8000)
VERBOS HTTP: get(para leer datos), post(para crear datos),update(actualizar/modificar datos) o put(actualizar/remplazar datos),delete--> Son los puntos de entrada para entrar a mi servidor q me facilita express(ej:app.get)
Express es un modulo framework
Lo inicializo con npm i express 
*/

/*
//EXPRESS/Desafio
let express = require("express");

let app = express();

const PORT = 3000;

app.get("/",(req, res,next)=>{
    res.send("<p>Mi primer servidor desde express <b><i> Clase Backend </i></b></p>");
});

app.listen(PORT,()=> {
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`);
});
*/

//Desafio
let express = require("express");

let moment = require("moment");

let app = express();

const PORT = 8080;

let totalVisitas = 0;

app.get("/",(req, res,next)=>{
    totalVisitas ++;
    res.send("<p style = 'color: red;'>Mi primer servidor desde express <b><i> Clase Backend </i></b></p>");
});

app.get("/visitas",(req, res,next)=>{
    res.send(`La cantidad de visitas es ${totalVisitas}`);
});

app.get("/fyh",(req, res,next)=>{
    res.json({fyh : moment().format ("DD/MM/YYYY HH:MM:SS ")});
});

app.listen(PORT,()=> {
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`);
});

//DESPLIEGUE EN LA NUBE CON GIT



