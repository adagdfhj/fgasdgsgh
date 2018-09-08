const Discord = require('discord.js');
const musicUtil = require('../../util/musicUtil.js');

exports.run = async (client, message, args) => {
    const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
    if(!message.member.hasPermission('MOVE_MEMBERS')) return message.reply(`você não tem permissão! ${emojinop}`).then(msg => msg.delete(6000));
    
    const serverQueue = musicUtil.queue.get(message.guild.id);
    if(!message.member.voiceChannel) return message.reply("você tem que está em um canal de voz.");
    if(!serverQueue) return message.reply('não está tocando nenhuma música.');
    message.channel.send(`:track_next: **|** ${message.author} a música \`${serverQueue.songs[0].title}\` foi pulada!`);
    serverQueue.connection.dispatcher.end();
    return;
}

exports.help = {
    name: "skip",
    aliases: [
        'pular'
    ]
}
