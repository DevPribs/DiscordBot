const Discord = require("discord.js");
const intl = require("intl");
const client = new Discord.Client();
const config = require("./config.json");
const boss_database = require("./DatabaseConnect");
const prefix = config.prefix;
let commands = ["ping", "ding", "help"];

client.on("ready", () => {
	console.log("I am ready");
});

client.on("message", (message)=> {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
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
		let helpMessage = "Here is the current list of commands: ";
		commands.forEach(function(c){
			helpMessage += (c + "\n");
		});
		message.channel.send(helpMessage);
	}
	if(command === "mob")
	{
        let param = args.shift();
        boss_database.get_boss(param, function(info){
            let boss_print = "```\nName: " + info[0].name + "\n" +
                "Type: " + info[0].type + "\n" +
                "Server: " + info[0].server + "\n" +
                "HP: " + new intl.NumberFormat().format(info[0].hp) + "\n" +
                "Level: " + info[0].level + "\n" +
                "PDR: " + info[0].pdr + "\n```";
            message.channel.send(boss_print);
        });
	}
});

client.login(config.token);