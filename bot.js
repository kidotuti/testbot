const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready! Kido');

});


client.on('ready', () => {
    client.user.setStatus('dnd')
    client.user.setPresence({
        game: {
            name: 'Type "kido", "help" for help!',
            type: "STREAMING",
            url: "https://www.twitch.tv/kidoooooooooooo"
        }
    });
});

 

client.on('message', message => {

    if (message.content === 'kido') {

       message.reply('Bạn cần Kido giúp gì nào? Cứ ibox đừng ngại nhé!')

       }

});

client.on('message', message => {

    if (message.content === 'Kido') {

       message.reply('Bạn cần Kido giúp gì nào? Cứ ibox đừng ngại nhé!')

       }

});

client.on('message', message => {

    if (message.content === 'KIDO') {

       message.reply('Bạn cần Kido giúp gì nào? Cứ ibox đừng ngại nhé!')

       }

});

client.on('message', message => {

    if (message.content === 'help') {

       message.reply('Bạn cần giúp gì nào? Các lệnh sẵn có: `kplay` để phát nhạc, `kido` để gọi Kido')

       }

});

client.on('message', message => {

    if (message.content === 'Help') {

       message.reply('Bạn cần giúp gì nào? Các lệnh sẵn có: `kplay` để phát nhạc, `kido` để gọi Kido')

       }

});
 
client.on('message', message => {

    if (message.content === 'Hello') {

       message.reply('Xin chào, mình là Kido BOT!')

       }

});

client.on('message', message => {

    if (message.content === 'hello') {

       message.reply('Xin chào, mình là Kido BOT!')

       }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
