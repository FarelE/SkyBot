let handler = async (m, { conn }) => {
  if (new Date - global.db.data.users[m.sender].lastclaim > 86400000) {
    conn.reply(m.chat, 'Nih Gw Kasih Modal Buat beli limit\n💰50.000 Rupiah', m)  
    global.db.data.users[m.sender].money += 50000
    global.db.data.users[m.sender].lastclaim = new Date * 1
  } else conn.reply(m.chat, '📮Subscribe Yt: Arifzyn Kalo Mau Dapat Uang Tambahan 100.000:v', m)
}
handler.help = ['bonus']
handler.tags = ['rpg']
handler.command = /^(bonus)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler