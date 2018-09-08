const Discord = require('discord.js');
const YouTube  = require('simple-youtube-api');
const musicUtil = require('../../util/musicUtil.js');
const youtube = new YouTube(process.env.API_KEY);


exports.run = async (client, message, args, prefix) => {
    //play
	
    const searchString = args.join(" ");
    const queue = musicUtil.queue;
    const serverQueue = musicUtil.queue.get(message.guild.id);

    const voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.reply('você não está em uma canal de música.');
    if(message.guild.me.voiceChannelID) {
    	if(message.member.voiceChannelID !== message.guild.me.voiceChannelID) return message.reply('você não está no mesmo canal que eu.');
    }
    
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if(!permissions.has("CONNECT")) {
        return message.reply('eu não tenho permissão de entar nesse canal.');
    }
    if(!permissions.has('SPEAK')) {
        return message.reply('eu não tenho permissão de falar nesse canal');
    }
    if(!args.length) {
	const comousar = new Discord.RichEmbed()
		.setAuthor("Kally", client.user.avatarURL)
		.setTitle(`${prefix}play`)
		.setDescription(`Irá tocar uma música.`)
		.setColor("#22a7cc")
		.setFooter("© Kally -kally.glitch.me")
		.addField("Como usar:", `\`${prefix}play <nome da música ou link do youtube>\`\n\`${prefix}play Lil Xan - Betrayed\``)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
    }


    if(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/.test(args[0])) {
        var video = youtube.getVideo(args[0]);
    }
    try {
        var videos = await youtube.searchVideos(searchString, 1);
        var video = await youtube.getVideoByID(videos[0].id);
    } catch (error) {
        console.error(error)
        message.reply("não consegui obter nenhum resultado.")
    }

    const song = exports.song = {
        id: video.id,
        vd: video,
		title: video.title,
        url: `https://www.youtube.com/watch?v=${video.id}`,
        pedido: message.author,
		tumb: video.thumbnails.default.url,
		seg: video.duration.seconds,
		min: video.duration.minutes,
		horas: video.duration.hours,
		canal: video.channel.title,
		likes: video.likeCount
    };

    if (!serverQueue) {
        const queueConstruct = {
	        serverA: message.guild,
            channelLOG: client.channels.get("474026851262529557"),
	        textChannel: message.channel,
	        messageAuth: message.author,
            voiceChannel: message.member.voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };

        queue.set(message.guild.id, queueConstruct);

        queueConstruct.songs.push(song);
	    
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            musicUtil.play(message.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(error);
            queue.delete(message.guild.id);
            serverQueue.voiceChannel.leave();
            return message.channel.send(":face_palm: Vish... Algo deu errado!! :x:");
        }

    } else {
        serverQueue.songs.push(song);
        return message.channel.send(`:card_box: **|** ${message.author} a música \`${song.title}\` foi adicinada na playlist.`);
    }

}

async function handleVideo(video, message, voiceChannel, playlist = false) {
    const serverQueue = musicUtil.queue.get(message.guild.id);
    const song = {
        id: video.id,
        title: video.title,
        url: `https://www.youtube.com/watch?v=${video.id}`,
        tumb: video.thumbnails.default.url,
        seg: video.duration.seconds,
        min: video.duration.minutes,
        horas: video.duration.hours,
        canal: video.channel.title,
        likes: video.likeCount
    };
    if(!serverQueue) {
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            messageAuth: message.author,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
    };
    musicUtil.queue.set(message.guild.id, queueConstruct);
  
    queueConstruct.songs.push(song);
  
    try {
        var connection = await voiceChannel.join();
        queueConstruct.connection = connection;
        musicUtil.play(message.guild, queueConstruct.songs[0]);
    } catch (error) {
        musicUtil.queue.delete(message.guild.id);
        return message.reply(`não consegui entrar no canal: **${message.member.voiceChannel.name}** : ${error}`);
      }
    } else {
      serverQueue.songs.push(song);
      if (playlist) return undefined;
      else return message.channel.send(`:cd: **|** ${message.author} a música: \`${song.title}\` foi adionada a fila!`);
    } 
    return undefined;
  }

exports.help = {
    name: "play",
    aliases: [
        'tocar'
    ]
}
