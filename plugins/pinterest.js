import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ اكتب الي عايز تدور عليه و ياريت انجليزي عشان يتطبق الامر صح ✅?\n📌 مثال  : ${usedPrefix + command} DARK`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*▢  قادمه من بنتريست💌:*  ${text}
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['بين', 'بنترست'] 

export default handler
