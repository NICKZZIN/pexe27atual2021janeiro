let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Crie um bot WA:
Credit: NICKZZIN

Digitar *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs

Para Github ..
5) $git clone https://bla bla bla bla
6) $ls
7) $cd ICHIKU

este é o *último*..
Instalação Cuy :)
8) npm i
9) node index.js

_MEU CANALZINHUU_
*Meu Ch Youtube:*
https://youtu.be/D58GrbAC1fA
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

