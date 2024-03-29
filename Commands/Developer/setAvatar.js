const Discord = require('discord.js');

module.exports = {
    name: "setavatar",
    usage: "setavatar <attachment>",
    category: __dirname.slice(__dirname.lastIndexOf("\\")).slice(1),
    path: __filename,
    description: "sets the bot avatar",
    argRequirements: args => !!args.length,
    run: async (client, message, args) => {

        if(client.developers.find(ID => ID == message.author.id) == undefined) return;

        if(message.attachments.size == 0) return message.channel.send('I cannot send my profile picture to nothing!')
        if(message.attachments.size == 1){
            let pfp = message.attachments.first().url
            client.user.setAvatar(pfp).then(() => {
                return message.channel.send('Succesfully changed Avatar')
            })
        } else if(args[0].includes('https://')){
           let url = args[0]
           try{
                client.user.setAvatar(url).then(() => {
                    return message.channel.send('Succesfully changed Avatar')
                })
           }catch(e){
               return message.channel.send(e)
           }
        } else {
            return message.channel.send("I cannot set my profile picture to nothing!")
        }

    }
}