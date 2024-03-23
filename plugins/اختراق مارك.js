const handler = async (m, { conn, command, text }) => {
  const lovePercentage = Math.floor(Math.random() * 100);
  const isHighLove = lovePercentage >= 50;
  const loveDescription = isHighLove ? "" : "";
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const response =
    `✦•━━━━ ∘⊰❄⊱∘ ━━━━•✦\n` +
    `${text} تـــم اخــتــراقــك بـنـجـاح ارســال بـيـانـاتـك لـلـمـطـور` +
    `\n✦•━━━━ ∘⊰❄⊱∘ ━━━━•✦` +
    ``    

  async function loading() {
var hawemod = [
"جــاري بــدء الــاخــتــراق",
"⌯ جــاري الــبــدء  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0%",
"⌯ جــاري تــحــمــيــل الــصــور █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 10 %",
"⌯ تــم تـحـمـيـل الـصـور بــنــجــاح  ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 20 %",
"⌯ جــاري تــحــمــيــل الـفـيـديـوهـات  ███▒▒▒▒▒▒▒▒▒▒▒▒▒ 30 %",
"⌯ تـــم تــحــمــيــل الـفـدـيـوهــات  ████▒▒▒▒▒▒▒▒▒▒▒▒ 40 %",
"⌯ جــاري تحـمـيـل الاصـوات  █████▒▒▒▒▒▒▒▒▒▒▒ 50 %",
"⌯ تــم تحـمـيـل الاصـوات  ██████▒▒▒▒▒▒▒▒▒▒ 60 %",
"⌯ جـاري تـحـمـيـل المـلـفـات  ███████▒▒▒▒▒▒▒▒▒ 80 %",
"⌯ تــم تـحـمـيـل المــلـفـات  ████████▒▒▒▒▒▒▒▒ 85 %",
"⌯ جاري تـحـمـيـل الــمـحـادثـات   █████████▒▒▒▒▒▒▒ 90 %",
"⌯ تم تـحـمـيـل الــمـحـادثـات   ███████████▒▒▒▒▒ 95 %",
"⌯ يـتـم تـحـمـيـل الاخـتـراق   ████████████▒▒▒▒ 96 %",
"⌯ جـاري رفـع الاخـتـراق عـلـي السـيـرفـر  █████████████▒▒▒ 97 %",
"⌯ تــم الــرفــع بــنــجــاح  ██████████████▒▒ 98 %",
"⌯ تــم الــاخــتــراق بــنــجــاح  ████████████████ 100 %",
"جــاري حــفــظ بــيــانــات الــضــحــيــه",
"تـــم الــحــفــظ بــنــجــاح"
]
   let { key } = await conn.sendMessage(m.chat, {text: `جــاري الــتــحــمــيــل`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['love'];
handler.tags = ['fun'];
handler.command = /^(اختراق|اخترق|تهكير)$/i;
handler.rowner = true
export default handler;