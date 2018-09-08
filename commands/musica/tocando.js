const Discord = require('discord.js');
const musicUtil = require('../../util/musicUtil.js');

exports.run = async (client, message, args) => {
  
    const serverQueue = musicUtil.queue.get(message.guild.id);
    if(!serverQueue) return message.reply("não está tocando nenhuma música.");
    const song = serverQueue.songs[0]
    if(!serverQueue) return message.reply("não está tocando nenhuma música.");
    const tocandoembed = new Discord.RichEmbed()
        .setAuthor(`${serverQueue.songs[0].canal}`)
        .setTitle(`${serverQueue.songs[0].title}`)
        .setURL(`${serverQueue.songs[0].url}`)
        .setColor("#22a7cc")
        .setThumbnail(serverQueue.songs[0].tumb)
        .addField("⏱ Duração:", `**${(song.horas < 10 ? "0" + song.horas : song.horas) + ":" + (song.min < 10 ? "0" + song.min : song.min) + ":" + (song.seg < 10 ? "0" + song.seg : song.seg)}**`, true)
        .setTimestamp()
        .setFooter("© Kally Música")

    return message.channel.send(message.author, tocandoembed);
}

exports.help = {
    name: "tocando"
}
