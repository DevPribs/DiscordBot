var mysql = require('mysql');
const config = require("./config.json");

var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database});



exports.get_boss = function(name, callback)
{
    var query = "SELECT * FROM BOSS WHERE NAME = " + mysql.escape(name);
    connection.query(query, function(error, result){
        if(error)
            throw error;
        console.log(result);
        callback(result);
    });
}


function get_boss_old(name){
    connection.connect(function(error){
        if(error)
            throw error;
        var query = "SELECT * FROM BOSS WHERE NAME = " + mysql.escape(name);
        connection.query(query, function(error, result){
            if(error)
                throw error;
            console.log(result[0].name);
            return result;
        })
    });
}