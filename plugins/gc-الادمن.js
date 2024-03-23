let handler = async (m, { conn, participants, groupMetadata, args }) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*❐↞┇الـرسـالـة📜↞ ${pesan}┇*`
let text = `*『┇مـنـشـن┇🪀┇الـمـشـرفـيـن┇』*

${oi}

*❐↞┇الـمـشـرفـيـن❄┇↶*
${listAdmin}

*❮❗┇ممنوع استعمال هاذا الامر لي سبب تافه او ان كان هناك مشرف متوفر استعماله بلا سبب قد يعرضك لي انذار او المنع من استعمال البوت ❯*`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['المشرفين <texto>']
handler.tags = ['group']
handler.command = /^(المشرفين|الادمن|@ادمن)$/i
handler.group = true
export default handler
