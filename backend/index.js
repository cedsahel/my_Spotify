const express = require("express")
const app = express()
var cors = require('cors')
const mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'ced',
    password: 'password',
    database: 'spotify',
});

app.use(cors())

app.get("/", (req, res) => {
        res.send("SPOTIFY API")
})


app.get("/artists", (req, res) => {
    connection.query('SELECT * FROM artists LIMIT 100', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

app.get("/artists/:id", (req, res) => {
    let id = req.params.id
    connection.query(`SELECT * FROM artists WHERE id = ${id}`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

app.get("/tracks", (req, res) => {  
    connection.query('SELECT * FROM tracks', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

app.get("/tracks/:id", (req, res) => {  
    let id = req.params.id
    connection.query(`SELECT * FROM tracks WHERE album_id = ${id}`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

app.get("/albums", (req, res) => {
    connection.query('SELECT * FROM albums LIMIT 10', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

app.get("/albums/:id", (req, res) => {
    let id = req.params.id
    connection.query(`select ar.name as arName, al.name as alName,al.cover as cover, t.name as tName,t.duration as duration,t.mp3 as url from tracks as t inner join albums as al on al.id=t.album_id inner join artists as ar on al.artist_id=ar.id where al.id=`+id, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

app.get("/genres", (req, res) => {
    connection.query('SELECT * FROM genres', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

app.get("/genres/:genre", (req, res) => {
    let genre = req.params.genre
    connection.query(`SELECT DISTINCT albums.id,albums.name AS "album",artists.name AS "artist", genres.name AS "genre", albums.cover_small AS "photo" FROM albums INNER JOIN artists ON albums.artist_id = artists.id INNER JOIN genres_albums ON albums.id = genres_albums.album_id INNER JOIN genres ON genres.id = genres_albums.genre_id WHERE genres.name = "${genre}" LIMIT 15`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})


app.listen(8888, () => {
    
})
