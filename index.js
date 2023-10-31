const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Name Test)`
connection.query(sql)

app.use(bodyParser.json());
app.use(express.static("./"));

app.get('/', (req,res) => {
    var d_msg = "SELECT * FROM people";
    var d_msgs = [req.body.doc_id_msgs];
    connection.query(d_msg, d_msgs, (err,rows) => {
        if(err){
            console.log('error ', err);
        } else { 
            res.send({title: '<h1>Full Cycle Rocks!</h1>', data: rows})
        }
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});