const ytdl = require('ytdl-core');
const Discord = require('discord.js');
//const { song } = require('../commands/musica/tocar.js');
const cor = "10371828"

const queue = new Map();

function play(guild, song) {
    const serverQueue = queue.get(guild.id);
  
    if (!song) {
        queue.delete(guild.id);
        serverQueue.serverA.me.voiceChannel.leave();
        return;
    }
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
      .on('end', () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
      })
      .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 10);
    serverQueue.textChannel.send(`💿 **|** Agora está tocando \`${song.title}\`!`)
    const musiclog = new Discord.RichEmbed()
        .setAuthor(song.canal)
        .setTitle(`🎵 ${song.title}`)
        .setColor("#22a7cc")
        .setThumbnail(song.tumb)
        .setFooter("© Kally - kally.glitch.me")
        .addField("Pedido por:", `\`${song.pedido.tag}\` - \`${song.pedido.id}\``)
        .addField("Servidor:", `\`${serverQueue.serverA.name}\` - \`${serverQueue.serverA.id}\``)
   serverQueue.channelLOG.send(musiclog)
}


module.exports = {
  play,
  queue
}
