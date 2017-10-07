const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
let commands = ["ping", "ding", "help"];

client.on("ready", () => {
	console.log("I am ready");
});

client.on("message", (message)=> {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shit().toLowerCase();
	
	if(command === "ping")
	{
		message.channel.send("pong");
	}
	
	if(command === "ding")
	{
		message.channel.send("dong");
	}
	
	if(command === "help")
	{
		let helpMessage = "Here is the current list of commands: "
		commands.forEach(funtion(c){
			helpMessage += (c + "\n";
		});
		message.channel.send(helpMessage);
	}
});

client.login(config.token);