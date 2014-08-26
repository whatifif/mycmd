module.exports = function(evt, cb){
	cb(null, {message: "my hello!"});
};

module.exports.control = function(){ return "local";};

module.exports.more = function(cb){
	cb(null, {
		info: "My more hello!",
		command: "myhello"
	});
};