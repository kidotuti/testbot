const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

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
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
