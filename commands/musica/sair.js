const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    
    const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
    if (!message.member.hasPermission('MOVE_MEMBERS')) return message.reply("você não tem permissão! "+ emojinop).then(msg => msg.delete(10000));

    const permissions = message.member.voiceChannel.permissionsFor(message.client.user);
    if(!permissions.has('CONNECT')) {
            return message.reply(`eu não tenho permissão de entrar no canal **${message.member.voiceChannel.name}** :worried: `)
    }

    if(!message.member.voiceChannel) return message.reply("você tem que está em um canal de voz.");
    if(!message.guild.me.voiceChannel) return message.reply("eu não estou nesse canal.");

    if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.reply("você tem que está em um canal de voz que eu esteja. :face_palm:")

    message.guild.me.voiceChannel.leave();
    message.channel.send(`:outbox_tray: **|** ${message.author} sai do canal **${message.member.voiceChannel.name}**.`)

}

exports.help = {
    name: "leave",
    aliases: [
        'sair'
    ]
}
