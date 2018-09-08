const Discord = require('discord.js');
const musicUtil = require('../../util/musicUtil.js');

exports.run = async (client, message, args) => {
    
      const serverQueue = musicUtil.queue.get(message.guild.id);
      if (!serverQueue) return message.reply("não tem nenhuma música na playlist.");
      let index = 0;
      const playlist = new Discord.RichEmbed()
        .setTitle(`:card_box: Playlist`)
        .setColor("#22a7cc")
        .setDescription(`${serverQueue.songs.map(song => `[${song.title}](${song.url}) (Por: ${song.pedido})`).join('\n')}`)
        .setTimestamp()
        .setFooter("© Kally Música")
      return message.channel.send(playlist);
    
    
}

exports.help = {
    name: "fila",
    aliases: [
        'playlist',
        'list',
        'lista'
    ]
}