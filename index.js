const Discord = require('discord.js');
const client= new Discord.Client();

client.once('ready', () => {
  console.log('your bot is online');
});

client.on('message', (message) => {
  console.log(message.content);
  if (message.content == '0F help') {  
    message.author.send('help')
  }
});



client.login(process.env.TOKEN);