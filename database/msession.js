/**
 * Created by Sophia on 2017/6/4.
 */
var Settings = require('/settings');
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var db = new Db(Settings.DB, new Server(
	Settings.HOST, Settings.PORT, {auto_reconnect:true, native_parser: true}),{safe: false}
);
//http://blog.csdn.net/nature_day/article/details/44488249
module.exports = db;