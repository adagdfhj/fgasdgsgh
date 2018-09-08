const Discord = require('discord.js');
const musicUtil = require('../../util/musicUtil.js');

exports.run = async (client, message, args) => {
  
    const serverQueue = musicUtil.queue.get(message.guild.id);
  
    const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
    if(!message.member.hasPermission('MOVE_MEMBERS')) return message.reply(`você não tem permissão! ${emojinop}`).then(msg => msg.delete(6000));

    if(!message.member.voiceChannel) return message.reply("você tem que está em um canal de voz.");
    if(!serverQueue) return message.reply("não está tocando nenhuma música.");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    return message.channel.send(`:stop_button:  **|** ${message.author} a música foi parada e a playlist foi limpa.`);
}

exports.help = {
    name: "stop",
    aliases: [
        'parar'
    ]
}
