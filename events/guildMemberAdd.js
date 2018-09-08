const Discord = require("discord.js");
var ms = require("ms");

    /**  TEMPLATE
    if(member.guild.id == "470729160650784788"){ // SERVIDOR DE TESTE
        const entrou = new Discord.RichEmbed()
            .setTitle(`Bem-vindo(a) 👋`)
            .setDescription(`**__${member.user.username}__** entrou em nosso servidor.`)
            .setThumbnail(member.user.avatarURL)
            .setColor("#139ec7")
            .setFooter("© Kally Parceiro")
            .setTimestamp()

        let role = member.guild.roles.find("id", "470729508928880650");

        member.addRole(role) 
        member.user.send(`Olá, bem-vindo(a) ao ${member.guild.name}!`).catch(O_o=>{});
        member.guild.channels.get("470729318696222743").send(entrou)

    } // FIM */

module.exports = async (member, client) => {
    
      const sleep = time => new Promise(resolve => {
           setTimeout(resolve, time)
      })

      if(member.guild.id == "420316735149965322"){ // Kally
          const entrou = new Discord.RichEmbed()
              .setTitle(`Bem-vindo(a) 👋`)
              .setDescription(`**__${member.user.username}__** entrou no servidor.`)
              .setThumbnail(member.user.avatarURL)
              .setColor("#3498db")
              .setFooter("© Kally")
              .setTimestamp()

         //let role = member.guild.roles.get("430495434172137502")

         member.addRole('430495434172137502') 
         member.user.send(`Bem-vindo ${member} ao servidor do bot Kally! para saber os comandos do bot digite \`k!ajuda\` no canal <#428401815629856768>\n\nDe sua sugestão no canal <#433385459343949826>\nReporte bug ou erro no Kally no canal <#459509701349212160>`).catch(O_o=>{});
         member.guild.channels.get("430142996051263490").send(entrou)

     } // FIM
     if(member.guild.id == "450149523088736266"){ // XiterszTeam

         //let role = member.guild.roles.find("id", "450157308211626006");

         member.addRole('450157308211626006') 

     } // FIM
     if(member.guild.id == "401017936560652288"){ // blucoball's Store
          const entrou = new Discord.RichEmbed()
              .setTitle(member.user.tag)
              .setDescription(`:point_right: Seja bem-vindo ao Blucoball's Discord **__${member.user.tag}__**`)
              .setThumbnail(member.user.avatarURL)
              .setColor("#3498db")
              .setFooter("© Kally")
              .setTimestamp()
          
         member.guild.channels.get("416720946536120320").send(entrou)

    } // FIM
    if(member.guild.id == "470729160650784788"){ // SERVIDOR DE TESTE
        const entrou = new Discord.RichEmbed()
            .setTitle(`Bem-vindo(a) 👋`)
            .setDescription(`**__${member.user.username}__** entrou em nosso servidor.`)
            .setThumbnail(member.user.avatarURL)
            .setColor("#139ec7")
            .setFooter("© Kally Parceiro")
            .setTimestamp()

        let role = member.guild.roles.get("470729508928880650");

        const sleep = time => new Promise(resolve => {
            setTimeout(resolve, time)
        })

        let membro = member.guild.roles.find(ro => ro.name === "Membro");
        let rnaoresg = member.guild.roles.find(ro => ro.name === "NÃO REGISTRADO");

        member.addRole(rnaoresg)

        var timea = 2 * 1000 * 60

        const senha = Math.random().toString(36).substring(2, 7)
        const info = new Discord.RichEmbed()
            .setAuthor("Sistema de segurança", client.user.avatarURL)
            .setTitle(":robot: Você é um robo!?")
            .setDescription(`**${member.user.tag}**, para você se tornar membro desse servidor do discord **reaja com 🤖** (Você tem **2** minutos)`)
            .setColor("#36393e")
            .setFooter(`Sistema criado por LockDzn#8368`, member.user.avatarURL)

        client.channels.get("470729919391858708").send(member, info).then(msg=> {
            msg.react("🤖")
            var collector = msg.createReactionCollector((r, u) => r.emoji.name === "🤖" && u.id == member.user.id);
                
            collector.on('collect', r => {
                msg.clearReactions()
                member.addRole(membro)
                client.channels.get("470729919391858708").send(`:white_check_mark: **|** ${member} resgistrado!`);
                return msg.delete().catch(O_o=>{});
            })
                
            collector.on('end', r => {
                if(!r.first()) {
                    msg.clearReactions()
                    member.kick(`Kikado por: ${client.user.tag} | Motivo: Demorou para se registar.`)
                    return msg.delete().catch(O_o=>{});
                }
            })
            setTimeout(() => {
                collector.stop();
            }, timea);
        });
        
    } // FIM
    
}
