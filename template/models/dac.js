/**
 * handle database
 */

const mysql = require('mysql');
const config = require('../config/base');

const dac = {
    do: sql => {
        return new Promise((resolve, reject) => {
            let connection = mysql.createConnection({
                host: config.dbInfo.dbHost,
                user: config.dbInfo.dbUser,
                password: config.dbInfo.dbPWD,
                port: config.dbInfo.dbPort,
                database: config.dbInfo.dbName
            });
            connection.connect();
            connection.query(sql, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                return resolve(rows);
            });
            connection.end();
        });
    },
    dop: (sql, para) => {
        return new Promise((resolve, reject) => {
            let connection = mysql.createConnection({
              host: config.dbInfo.dbHost,
              user: config.dbInfo.dbUser,
              password: config.dbInfo.dbPWD,
              port: config.dbInfo.dbPort,
              database: config.dbInfo.dbName
            });
            connection.connect();
            connection.query(sql, para, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                return resolve(rows);
            });
            connection.end();
        });
    }
};
module.exports = dac;
