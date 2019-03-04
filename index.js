const botConfig = require("./botConfig.json");
Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log('${bot.user.username} is online!');
    bot.user.setActivity("Debugging your shit code!");
});
bot.on("message", async message => {
    //Separate commands from arguments.
    let args = message.content.slice(botConfig.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    // Ignore commands that don't start with your prefix.
    if(message.content.indexOf(botConfig.prefix) !== 0) return;
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botConfig.prefix;
    let messageArray = message.content.split(" ");
    
    
    if(message.content.indexOf(botConfig.prefix) !== 0) return;
    if(command = `hello`){
        return message.channel.send("Hello!");
    }
});

bot.login(botConfig.token);