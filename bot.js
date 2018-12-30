const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});


client.on('ready', () => {
    client.user.setStatus('dnd')
    client.user.setPresence({
        game: {
            name: 'you',
            type: "watching",
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

    if (message.content === 'Tiến') {

       message.reply('Chờ trùm Server một tý nhé, nhanh thôi!')

       }

});

client.on('message', message => {

    if (message.content === 'tiến') {

       message.reply('Chờ trùm Server một tý nhé, nhanh thôi!')

       }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
