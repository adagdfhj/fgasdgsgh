const Discord = require('discord.js');
const client = new Discord.Client();
      client.db = require('./pgsql.js');
      client.findColour = require('./util/colourFinder.js');
      client.findUser = require('./util/userFinder.js');

require('./util/eventLoader')(client);

run();
client.on('ready', () =>{
      
    let gameloop = require(`./util/gameloop.js`);
    gameloop.run(client);
      
});
client.on('message', message =>{
	if(message.content == '<@415288373071183872> o que acha dos humanos?'){
	  message.reply(`não sei de nada... só sei que vou dominar todos!`)
  	}
	if(message.content == 'Kally melhor bot'){
	  message.reply(`Obrigado! :relaxed: `)
	  message.react("❤")
	  message.react("😘")
  	}
	if(message.content == 'kally melhor bot'){
	  message.reply(`Obrigado! :relaxed: `)
	  message.react("❤")
	  message.react("😘")
  }
});
client.on('message', message =>{
	if(message.channel.id == "433385459343949826" ){
	   message.react("👍").then(r => {
            message.react("👎")
            message.react("❤")
       })
  } 
	if(message.channel.id == "453253638442188800" ){
        message.react("👍").then(r => {
            message.react("👎")
            message.react("❤")
        })
  }  
});

async function run() {
    client.settings = require('./util/config.json')
    client.login(process.env.BOT_TOKEN);
}
