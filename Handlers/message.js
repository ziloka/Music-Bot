const {client, prefix} = require('./../index.js');
const Discord = require('discord.js');

let escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
client.on('message', async message => {

    if(message.author.bot) return;
    let prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if(!prefixRegex.test(message.content)) return;

    let [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    let commandfile = client.commands.get(command)
    if(!commandfile) client.commands.get(client.aliases.get(command))
    if(commandfile == undefined) return;
    if(commandfile.argRequirements(args) == true) return message.channel.send(`Correct usage is **${prefix}${commandfile.usage}**`)
    if(commandfile) commandfile.run(client, message, args)

})