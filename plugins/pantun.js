let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pantun)}”`, m)
}
handler.help = ['pantun']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
" *PANTUN:*\n\nHá uma criança brincando de pedra,\nA pedra foi lançada no poço,\nAprender é atemporal,\nTambém não olhe para a idade.\n *Bye Instagram:* @arpunchs",
" *PANTUN:*\n\nPlante o feijão de manhã,\nCresce seis gravetos secos,\nA feiura das pessoas não deve ser procurada,\nQuando você está jejuando.\n *Bye Instagram:* @arpunchs",
" *PANTUN:*\n\nO final do mês ganha um salário,\nSalário para comprar kétichupi,\nOre diligentemente e recite,\nNão se esqueça do jejum.\n *Bye Instagram:* @arpunchs",
" *PANTUN:*\n\nHora da lista do último dia,\nMuito tempo foi perdido,\nVocê não precisa se preocupar,\nMeu amor é só por você.\n *Bye Instagram:* @arpunchs",
" *PANTUN:*\n\nHá uma criança brincando de pedra,\nA pedra foi lançada no poço,\nAprender é atemporal,\nTambém não olhe para a idade.\n *Bye Instagram:* @arpunchs",
" *PANTUN:*\n\nMil patos na cova de um leão,\nApenas um listrado,\nMilhares de meninas na Indonésia,\nSó você eu amo.\n *Bye Instagram:* @arpunchs",
" *PANTUN:*\n\nDomingo ir ao mercado,\nCompre vegetais e até arroz,\nTodos os dias você tem que estudar,\nCom certeza será inteligente.\n *Bye Instagram:* @arpunchs",
" *PANTUN:*\n\nFrango frito meio cozido,\nCompre na frente do monumento.\nQuerido irmão, meu irmão é bonito,\nick está aqui esperando fielmente.\n *Bye Instagram:* @arpunchs",
" *PANTUN:*\n\nUm pequeno fogo da fornalha,\nO fogo acabou de madeira.\nEu tenho esperado por tanto tempo,\nQuando você disse eu te amo.\n *Bye Instagram:* @arpunchs",
" *PANTUN:*\n\nMil patos na cova de um leão,\nApenas um listrado\nMilhares de meninas na Indonésia,\Só você eu amo.\n *Bye Instagram:* @arpunchs",
" *PANTUN:*\n\nPescar ao amanhecer,\nVenha para casa à tarde trazendo peixes\nQuem é estudioso\nPessoas tão bem sucedidas então.\n *Bye Instagram:* @arpunchs",
" *PANTUN:*\n\nCompre um computador normal\nPara que aprender se torne uma paixão\nVamos aprender jejum\nPara que possamos ser fortes\n *Bye Instagram:* @arpunchs",
" *PANTUN:*\n\nBeba uma garrafa de sabor quente,\nBeber um copo que alguém perguntou.\nQuem está com o menino bonito?\nPosso me apaixonar.\n *ByeInstagram:* @arpunchs",
]
