let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 INFO BOT 〙
*▌║*
*▌║✙* Feito em linguagem javascript via NodeJs
*▌║✙* Cria: nickzzin
*▌║✙* Instagram: @n1ckzz1n
*▌║✙* YouTube: NICKZZIN
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*
*▌║*>Perguntas? Wa.me/5512997277680
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 BOTNI 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

