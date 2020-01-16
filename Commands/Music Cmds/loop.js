module.exports = {
    name: "loop",
    usage: "loop <song or queue>",
    argRequirements: args => !args.length,
    run: async (client, message, args) => {

        let options = ['song', 'queue']
        if(client.queue.has(message.guild.id) == false) return message.channel.send('Nothing is playing!')
        let option = options.find(option => option == args[0])
        if(option == undefined) return message.channel.send('That is not a valid parameter!')
        if(option == 'song'){
            let newArray = [];
            let currentSong = client.queue.get(message.guild.id).queue[0]
            client.queue.get(message.guild.id).queue = newArray.push(currentSong)
            console.log(client.queue.get(message.guild.id).queue)
            return message.channel.send('Succesfully looped the song forever')
        } else if(option == 'queue'){
            client.queue.get(message.guild.id).loopQueue = true
            return message.channel.send('Succesfully looped the queue')
        }

    }
}