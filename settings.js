require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "919947121619"
global.namaowner = "𝑆𝑌𝛥𝛭.3𝐹𝛸
global.prefix = "!"
global.namaowner2 = "🤍⃞𝄟ꪶ𝐒͢ʏ᪳ᴀ͓ᴍ͎ ͢𝐒ᴇ͓ꪳʀ͎𖦻⃞🍓"

//======== Setting Bot & Link ========//
global.namabot = "🤍⃞𝄟ꪶ𝐒͢ʏ᪳ᴀ͓ᴍ͎ ͢𝐒ᴇ͓ꪳʀ͎𖦻⃞🍓" 
global.namabot2 = "🕊🦋⃝♥⃝ѕиєнα🍁♥⃝🦋⃝🕊"
global.version = "v1.0.0"
global.foother = "Created By Ｓㄚ 么 m"

global.linkgc = 'https://www.instagram.com/_mr.fro_ud_/'
global.linksaluran = "https://www.instagram.com/_mr.fro_ud_/"
global.linkyt = 'https://www.instagram.com/_mr.fro_ud_/'
global.linktele = "https://www.instagram.com/_mr.fro_ud_/"
global.web = "https://www.instagram.com/_mr.fro_ud_/"
global.github = "https://www.instagram.com/_mr.fro_ud_/"
global.packname = "Created By 🤍⃞𝄟ꪶ𝐒͢ʏ᪳ᴀ͓ᴍ͎ ͢𝐒ᴇ͓ꪳʀ͎𖦻⃞🍓"
global.author = "https://www.instagram.com/_mr.fro_ud_/"

global.namach = " || 複| $ʏᴀᴍツ ||"
global.idch = "syamefx123@gmail.com"

//========== Setting Event ==========//
global.autoread = false
global.anticall = false
global.autoreadsw = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 4500
global.delayjpm = 1000

//========== Setting Foto ===========//
global.thumb = "https://files.catbox.moe/mev5cq.jpeg"
global.img = "https://files.catbox.moe/nbn8w8.jpeg"
global.thumbxm = "https://files.catbox.moe/dphztt.jpeg"
global.thumbbc = "https://files.catbox.moe/mev5cq.jpeg"

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "085298027445"
global.gopay = "085298027445"
global.ovo = false
global.qris = "https://files.catbox.moe/3zu1hd.jpg"

//========= Setting Payment =========// 
global.namadana = "🕊🦋⃝♥⃝ѕиєнα🍁♥⃝🦋⃝🕊"
global.namagopay = "Ｓㄚ 么 m"
global.namaovo = "𝑆𝑌𝛥𝛭.3𝐹𝛸
" 

//========= Setting Message =========//
global.msg = {
"error": "munjii poyii",
"done": "aah kazhijj", 
"wait": "wait kuttah wait. . .", 
"group": "*• Group Only* This Feature Is Only For Within Groups!", 
"private": "*• Private Chat* This Feature Is Only For Within Groups!", 
"owner": "*• Owner Only* This feature is only for Bot Owners!", 
"developer": "*• Developer Only* This Feature Is For Developers Only"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})