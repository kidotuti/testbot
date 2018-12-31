const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});


client.on('ready', () => {
    client.user.setStatus('dnd')
    client.user.setPresence({
        game: {
            name: 'Tuần này Kido off, có gì ibox Min, Súp Mod, Mod nhé!',
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

       message.reply('Bạn cần giúp gì nào?')

       }

});

client.on('message', message => {

    if (message.content === 'Help') {

       message.reply('Bạn cần giúp gì nào?')

       }

});
 
client.on('message', message => {

    if (message.content === 'Tiến') {

       message.reply('Chờ trùm Server một tý nhé, nhanh thôi!')

       }

});

client.on('message', message => {

    if (message.content === 'tiến') {

       message.reply('Chờ trùm Server một tý nhé, nhanh thôi!')

       }

});

client.on('message', message => {

    if (message.content === 'Hello') {

       message.reply('Xin chào, Mình là Kido BOT!')

       }

});

client.on('message', message => {

    if (message.content === 'hello') {

       message.reply('Xin chào, Mình là Kido BOT!')

       }

});

client.on('message', message => {

    if (message.content === 'yuna') {

       message.reply('đợi cu gái đáng iuz một tí nha hjhj!')

       }

});

client.on('message', message => {

    if (message.content === 'Yuna') {

       message.reply('đợi cu gái đáng iuz một tí nha hjhj!')

       }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
