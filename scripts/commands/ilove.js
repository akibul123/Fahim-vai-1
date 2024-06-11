const fs = require("fs");
module.exports.config = {
  name: "iloveu",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Nilima Mim")==0 || (event.body.indexOf("Mim")==0 || (event.body.indexOf("fahim er bou")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: "কেউ আমার বস আর বউ রে মেনসন দিবিনা ওই টা আমার বস ফাহিম এর বউ লাগে 😇😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
