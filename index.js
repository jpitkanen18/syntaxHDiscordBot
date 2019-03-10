<<<<<<< Updated upstream
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./botConfig.json");
const token = require("./tokenBot.json");


client.on("ready", () => {
	console.log(`I'm alive in ${client.guilds.size} server(s) with a total of ${client.users.size} members.`);
	client.user.setActivity("BAD_EXEC_ADDRESS");
	})
	
client.on("message", async message => {
	
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  if(message.author.bot) return;
  
  if(command === "hello"){
		message.channel.send("Hello")
        }
  if(command === "stobit"){
      message.channel.send("Nibba stobit :Dddd");
  }
		
}); //END

client.login(token.token); //Login.
=======
const botConfig = require("./botConfig.json");
const tokenBot = require("./token.json");
Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log('${bot.user.username} is online!');
    bot.user.setActivity("Debugging your shit code!");
});
bot.on("message", async message => {
    let prefix = botConfig.prefix;
});

bot.login(tokenBot.token);
>>>>>>> Stashed changes
