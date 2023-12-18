import express from "express";
import BodyParser from "body-parser";
import cors from 'cors';
import mysql from 'mysql';
import dotenv from 'dotenv/config';

const app = express();
app.use(BodyParser.json());
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));
app.use(express.json({limit: '200mb'}));
app.use(express.urlencoded({limit: '200mb', extended: true}));

let mysqlConn = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DBNAME,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    port: process.env.PORT
})


app.get('/msg', function(req, res){
    console.log('I got a request...', req.query);
    res.send('I am ready to serve you...');
})

app.get('/get-reg-user', function(req, res) {
    let qry = "SELECT * FROM user_accounts WHERE phone = '" + req.query.phone + "'";
    console.log('QRY', qry);
    console.log(qry);
    mysqlConn.query(qry, function(err, result, fields) {
        console.log('Error: ', err);
        console.log('Result: ', result);
        console.log('Fields: ', fields);
        if (err){
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
})

app.get('/get-user-consign', function(req, res) {
    let qry = "SELECT * FROM user_consignments";
    console.log('QRY', qry);
    console.log(qry);
    mysqlConn.query(qry, function(err, result, fields) {
        console.log('Error: ', err);
        console.log('Result: ', result);
        console.log('Fields: ', fields);
        if (err){
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
})

app.post('/reg-user', function(req, res){
    console.log(req.body);
    let qry = "INSERT INTO user_accounts "
    qry += "(first_name, last_name, phone, email_id, password) VALUES ('";
    qry += req.body.first_name + "', '"+ req.body.last_name +"','";
    qry += req.body.phone + "','"+ req.body.email_id +"','" + req.body.password+"')";
    console.log(qry);
    mysqlConn.query(qry, function(err, result, fields) {
        console.log('Error: ', err);
        console.log('Result: ', result);
        console.log('Fields: ', fields);
        if (err){
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
    
})

app.post('/user-msg', function(req, res){
    console.log(req.body);
    let qry = "INSERT INTO user_messages "
    qry += "(person_name, phone, email_id, message) VALUES ('";
    qry += req.body.person_name + "', '"+ req.body.phone +"','";
    qry += req.body.email_id + "','"+ req.body.message +"')";
    console.log(qry);
    mysqlConn.query(qry, function(err, result, fields) {
        console.log('Error: ', err);
        console.log('Result: ', result);
        console.log('Fields: ', fields);
        if (err){
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
    
})

app.post('/user-consign', function(req, res){
    console.log('Input is', req.body);
    let qry = "INSERT INTO user_consignments "
    qry += "(artist_name, title, materials, art_year, rarity, provenance, medium, height, width, depth, photo) VALUES ('";
    qry += req.body.artist_name + "', '"+ req.body.title +"','"+ req.body.materials +"','"+ req.body.art_year +"','";
    qry += req.body.rarity + "','"+ req.body.provenance + "','"+ req.body.medium +"','" + req.body.height +"','" + req.body.width +"','" + req.body.depth + "','" + req.body.photo + "')";
    console.log(qry);
    mysqlConn.query(qry, function(err, result, fields) {
        console.log('Error: ', err);
        console.log('Result: ', result);
        console.log('Fields: ', fields);
        if (err){
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
    
})

app.listen(5566);
console.log('Server started on port 5566');

