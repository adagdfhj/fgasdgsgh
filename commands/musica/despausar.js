const Discord = require('discord.js');
const musicUtil = require('../../util/musicUtil.js');

exports.run = async (client, message, args) => {
    
    const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
    if(!message.member.hasPermission('MOVE_MEMBERS')) return message.reply(`você não tem permissão! ${emojinop}`).then(msg => msg.delete(6000));
    
    if(!message.member.voiceChannel) return message.reply("você não está em canal de voz.");
    const serverQueue = musicUtil.queue.get(message.guild.id);
    
    if(!serverQueue) return message.reply("não está tocando nenhuma música.");
    if(!serverQueue && serverQueue.playing) return;

    serverQueue.playing = true;
    serverQueue.connection.dispatcher.resume();
    message.channel.send(`▶ **|** ${message.author} a música foi despausada.`)

    return;

}

exports.help = {
    name: "despausar",
    aliases: [
        'retomar',
        'resume',
        'despause'
    ]
}
