const Discord = require("discord.js");

    /** TEMPLATE
    if(member.guild.id == "470729160650784788"){ // SERVIDOR DE TESTE
        const saiu = new Discord.RichEmbed()
            .setTitle(`Tchau 👋 :worried:`)
            .setDescription(`**__${member.user.username}__** saiu de nosso servidor.`)
            .setThumbnail(member.user.avatarURL)
            .setFooter("© Kally Parceiro")
            .setTimestamp()

        member.guild.channels.get("470729318696222743").send(saiu)

    } // FIM */

module.exports = async (member, client) => {

    if(member.guild.id == "420316735149965322"){ // Kally
       const saiu = new Discord.RichEmbed()
          .setTitle(`Tchau 👋 :worried:`)
          .setDescription(`**__${member.user.username}__** saiu do servidor.`)
          .setThumbnail(member.user.avatarURL)
          .setFooter("© Kally Parceiro")
          .setTimestamp()

       member.guild.channels.get("430142996051263490").send(saiu)

    } // FIM
    if(member.guild.id == "401017936560652288"){ // blucoball's Store
       const saiu = new Discord.RichEmbed()
          .setTitle(member.user.tag)
          .setDescription(`:point_left: Adeus **__${member.user.tag}__**!.`)
          .setThumbnail(member.user.avatarURL)
          .setFooter("© Kally Parceiro")
          .setTimestamp()

       member.guild.channels.get("416720946536120320").send(saiu)

    } // FIM
    

}
