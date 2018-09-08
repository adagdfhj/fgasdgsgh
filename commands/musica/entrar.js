const Discord = require('discord.js');
const musicUtil = require('../../util/musicUtil.js');

exports.run = async (client, message, args) => {
  
    const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
    if (!message.member.hasPermission('MOVE_MEMBERS')) return message.reply("você não tem permissão! "+ emojinop).then(msg => msg.delete(10000));

    const permissions = message.member.voiceChannel.permissionsFor(message.client.user);
    if(!permissions.has('CONNECT')) {
            return message.reply(`eu não tenho permissão de entrar no canal **${message.member.voiceChannel.name}** :worried: `)
    }

    const serverQueue = musicUtil.queue.get(message.guild.id);

    if(!message.member.voiceChannel) return message.reply("você tem que está em um canal de voz.");
    message.member.voiceChannel.join();
    message.channel.send(`:inbox_tray: **|** ${message.author} entrei no canal **${message.member.voiceChannel.name}**.`)
}

exports.help = {
    name: "entrar",
    aliases: [
        'join'
    ]
}
