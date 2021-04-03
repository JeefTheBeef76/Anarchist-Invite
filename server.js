let Discord = require("discord.js");
let client = new Discord.Client();
const discord = require("discord.js")

client.on("message", message => {

if(message.content === 'test') {
message.channel.send('yes')
}

})

client.login("TOKEN")


const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('Your bot is alive!')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}
module.exports = keepAlive;