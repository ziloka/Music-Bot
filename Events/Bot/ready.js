const {client} = require('../../index.js');

client.on('ready', async () => {

    console.log(`${client.user.username} is online! \n${client.user.username}'s ID is ${client.user.id}`)
    
})