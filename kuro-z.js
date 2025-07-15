const { Sticker } = require('wa-sticker-formatter')
module.exports = async (ZassBtz, m, store) => {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const from = m.chat;

//========== DATABASE ===========//
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const teksjpm = fs.readFileSync("./list/teksjpm.js").toString()

//========= CONFIGURASI ==========//
const budy = (typeof m.text == 'string' ? m.text : '')
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : isOwner && !m.isBaileys ? '' : '.'
const isCmd = body?.startsWith(prefix) || false
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
const moment = require('moment-timezone');
const time = moment().format("HH:mm:ss DD/MM");
let { randomBytes } = require("crypto")
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await ZassBtz.decodeJid(ZassBtz.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await ZassBtz.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
const groupName = isGroup ? groupMetadata.subject : "";
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { sleep } = require("./all/myfunc.js")  
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
//=========== MESSAGE ===========//
if (isCmd) {
console.log(chalk.green.bold("《 ") +
                        chalk.magenta.bold("Console By 𝑆𝑌𝛥𝛭.3𝐹𝛸") +
                        chalk.green.bold(" 》 ") +
                        chalk.blue(time) +
                        " from " +
                        chalk.magenta.bold(pushname) +
                        " in " +
                        chalk.yellow.bold(groupName))
};

//========= FAKE QUOTED =========//
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const qkuro = {
  key: {
    fromMe: true,
    remoteJid: 'self',
    id: '🕊🦋⃝♥⃝ѕиєнα🍁♥⃝🦋⃝🕊' + Math.floor(Math.random() * 10000) // ID acak biar unik
  },
  message: {
    listResponseMessage: {
      title: `Ｓㄚ 么 m...`,
      description: `Hello *${pushname} Welcome To ${namabot}*`,
      buttonText: "Ehh",
      listType: 1
    }
  }
};

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `${namabot} Powered By ${namaowner}`, jpegThumbnail: ""}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot JPM By ${namaowner}`,jpegThumbnail: ""}}}

const qcall = {
key: {
participant: "0@s.whatsapp.net",
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": `${namabot} - Z Gen`,
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": " 🇸 🇾 🇦 🇲"
    },
    "joinLink": "https://www.instagram.com/_mr.fro_ud_/",
    "startTime": "1713724680"
  }
}
}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Kuroko Bot Pushkontak By ${namaowner}`,jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=:+91 99471 21619\nitem1.\nEND:VCARD`,
sendEphemeral: true
}}
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363417526801494@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Kuroko Powered By ${namaowner2}`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `${namaowner2} - Marketplace`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "999999999999999",
"retailerId": `Powered By Kuroko Botz`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}


//========== CASE ===========//
async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('munjii:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}


//========== FUNCTION ===========//
let ppuser
try {
ppuser = await ZassBtz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/nbn8w8.jpeg'
}

async function SendSlide(jid, img, txt = []) {
let anu = new Array()
let imgsc = await prepareWAMessageMedia({ image: img}, { upload: ZassBtz.waUploadToServer })
for (let ii of txt) {
anu.push({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `${ii}`
}),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"🔥 veno 🔥\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"ehh\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Join Group\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All TRX Open ✅*\n\n*🤍⃞𝄟ꪶ𝐒͢ʏ᪳ᴀ͓ᴍ͎ ͢𝐒ᴇ͓ꪳʀ͎𖦻⃞🍓* *HABIBBI-ONLY-ENTERTAINMENTS..!*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: anu
})
})}
}}, {userJid: m.sender, quoted: qtoko})
return ZassBtz.relayMessage(jid, msgii.message, {
messageId: msgii.key.id
})}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//========= SET VALIDASI =========//
const example = async (teks) => {
  await ZassBtz.sendMessage(m.chat, {
    react: { text: '✖️', key: m.key }
  });

  const commander = `*Contoh Perintah yang Benar:*\n\n• *${cmd}* ${teks}\nSilakan ulangi perintah sesuai format.`;

  return ZassBtz.sendMessage(m.chat, {
    text: commander,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idch,
        newsletterName: global.namach,
      },
      externalAdReply: {
        showAdAttribution: false,
        title: `Format Salah !!!!`,
        body: `${global.namabot}`,
        thumbnailUrl: global.thumbxm,
        sourceUrl: global.web,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

const larang = async () => {
  await ZassBtz.sendMessage(m.chat, {
    react: { text: '✖️', key: m.key }
  });

  return ZassBtz.sendMessage(m.chat, {
    text: msg.owner,
    contextInfo: {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idch,
        newsletterName: global.namach,
      },
      externalAdReply: {
        showAdAttribution: false,
        title: `- Prohibition Message -`,
        body: `Fitur ini khusus orang special`,
        thumbnailUrl: global.img,
        sourceUrl: global.web,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
};

//========= SETTING EVENT ========//
switch (command) {
case "menu": {
let teksmenu = `
⛩ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *${global.namaowner}*
⛩ 𝐍𝐮𝐦𝐛𝐞𝐫 : *${global.owner}*
⛩ 𝐍𝐚𝐦𝐚 𝐁𝐨𝐭 : *${global.namabot}*
⛩ 𝐌𝐨𝐝𝐞 : *${ZassBtz.public ? 'Public' : 'Self'}*
⛩ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
⛩ 𝐕𝐏𝐒 𝐔𝐩𝐭𝐢𝐦𝐞 : *${runtime(os.uptime())}*

╭─────────────────────➤
│╭─▣「 *Group Menu* 」▣─╮
││ ⟿ .delete
││ ⟿ .leavegc
││ ⟿ .leavegc2
│╰─➤
│
│╭─▣「 *Broadcast Menu* 」▣─╮
││ ⟿ .cekidgc
││ ⟿ .listgc
││ ⟿ .pushkontak
││ ⟿ .pushkontak2
││ ⟿ .pushkontakid
││ ⟿ .pushkontakid2
││ ⟿ .savekontak
││ ⟿ .jpm
││ ⟿ .jpmht
││ ⟿ .bcgc
│╰─➤
│
│╭─▣「 *Random Menu* 」▣─╮
││ ⟿ .cekkhodam
││ ⟿ .cekkontol
││ ⟿ .brat
││ ⟿ .bratvid
││ ⟿ .qc
││ ⟿ .sticker
│╰─➤
│
│╭─▣「 *Control Menu* 」▣─╮
││ ⟿ .setppbot
││ ⟿ .setppbotpanjang
││ ⟿ .setnamabot
││ ⟿ .setbiobot
││ ⟿ .setting
││ ⟿ .autoread
││ ⟿ .autoreadsw
││ ⟿ .joingc
││ ⟿ .getcase <cmd>
│╰─➤
│
│╭─▣「 *Store Menu* 」▣─╮
││ ⟿ .dana
││ ⟿ .ovo
││ ⟿ .gopay
││ ⟿ .qris
│╰─➤
│
│╭==⊱ *Source Script* ▣─╮
││㉿ Instagram: _mr.fro_ud_
││㉿ Website: ${global.web}
│╰───➤
╰─────┈➤

    ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
  『 *🕊🦋⃝♥⃝ѕиєнα🍁♥⃝🦋⃝🕊* 』
  `
await ZassBtz.sendMessage(m.chat, {
  text: teksmenu,
  contextInfo: {
    isForwarded: true,
    mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.idch,
      newsletterName: global.namach
    },
    externalAdReply: {
      title: `© ${namabot} - Z Gen`,
      body: `Powered by ${namaowner}.`,
      thumbnailUrl: global.thumb,
      renderLargerThumbnail: true,
      sourceUrl: global.linkyt,
      mediaType: 1
    }
  }
}, { quoted: qkuro });
}
break

case "brat": {
if (!text) return example();
try {
await ZassBtz.sendMessage(m.chat, {
react: { text: "⏳", key: m.key }
});
const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false`;
const response = await axios.get(url, { responseType: "arraybuffer" });

const sticker = new Sticker(response.data, {
            pack: global.packname,
            author: global.author,
            type: "image/png"
        });
const stikerBuffer = await sticker.toBuffer();

await ZassBtz.sendMessage(m.chat, {
            sticker: stikerBuffer
        }, 
        { quoted: m });
    } catch (err) {
        console.error("Error:", err);
await ZassBtz.sendMessage(m.chat, {
text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti."
        }, 
        { quoted: m });
    }
}
break;

case "bratvid": {
if (!text) return example();
try {
await ZassBtz.sendMessage(m.chat, {
react: { text: "⏳", key: m.key }
});
const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true`;
const response = await axios.get(url, { responseType: "arraybuffer" });

const sticker = new Sticker(response.data, {
            pack: global.packname,
            author: global.author,
            type: "image/png"
        });
const stikerBuffer = await sticker.toBuffer();
await ZassBtz.sendMessage(m.chat, {
            sticker: stikerBuffer
        }, { quoted: m });

    } catch (err) {
        console.error("Error:", err);
        await ZassBtz.sendMessage(m.chat, {
            text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat video. Coba lagi nanti."
        }, { quoted: m });
    }
}
break;

case "sticker":
case "stiker":
case "sgif":
case "s": {
  if (!/image|video/.test(mime)) return example("Kirim atau reply gambar/video");

  if (/video/.test(mime) && (qmsg?.seconds > 15)) {
    return m.reply("✖️ Durasi video maksimal 15 detik.");
  }

  await ZassBtz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

  try {
    const media = await ZassBtz.downloadAndSaveMediaMessage(qmsg);
    await ZassBtz.sendStimg(m.chat, media, m, {
      packname: global.packname,
      author: global.author
    });
    fs.unlinkSync(media);
  } catch (e) {
    m.reply("✖️ Terjadi kesalahan saat mengeksekusi perintah.");
  }
}
break;

case "setppbot": case "setpp": {
if (!isOwner) return larang();
if (/image/g.test(mime)) {
let media = await ZassBtz.downloadAndSaveMediaMessage(qmsg)
await ZassBtz.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
m.reply("*Berhasil Mengganti Profil ✅*")
} else return example("dengan mengirim foto")
}
break

case "setppbotpanjang": case "setpppanjang": {
if (!isOwner) return larang();
if (/image/g.test(mime)) {
var medis = await ZassBtz.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await ZassBtz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("*Berhasil Mengganti Profil ✅*")
} else return m.reply(example('dengan mengirim foto'))
}
break
case "setnamabot": {
if (!isOwner) return larang();
if (!text) return example("teksnya")
ZassBtz.updateProfileName(text)
m.reply("*Berhasil Mengganti Nama Bot ✅*")
}
break
case "setbio": case "setbiobot": {
if (!isOwner) return larang();
if (!text) return example("teksnya")
ZassBtz.updateProfileStatus(text)
m.reply("*Berhasil Mengganti Bio Bot ✅*")
}
break
case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply(msg.wait)
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./all/tmp/"+makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await ZassBtz.sendStimg(m.chat, tempnya, m, {packname: namabot})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break
case "public": {
if (!isOwner) return larang();
ZassBtz.public = true
m.reply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Public*")
}
break
case "self": {
if (!isOwner) return m.reply(msg.owner)
ZassBtz.public = false
m.reply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Self*")
}
break

case "getcase": {
if (!isOwner) return larang();
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./ZassBtz.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* Tidak Ditemukan`)
}
}
break

case 'bcgc':
case 'bcgroup': {
if (!isOwner) return larang();
if (!text) return example(`teksnya`)
  let getGroups = await ZassBtz.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(global.delayjpm)
  let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
ZassBtz.sendMessage(i, {
  text: a,
   contextInfo: {
            externalAdReply: {
            showAdAttribution: true,
            title: 'Broadcast By Kuroko Botz',
            body: `Telah Terkirim ${i.length} Group`,
            thumbnailUrl: global.thumbbc,
            sourceUrl: global.linksaluran,
            mediaType: 1,
            renderLargerThumbnail: true
                            }
                        }
                    })
                }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break;

case 'pushkontak': {
  if (!isGroup) return m.reply(msg.group);
  if (!isOwner) return larang();

  const groupMetadata = await ZassBtz.groupMetadata(from);
  const participants = groupMetadata.participants;

  if (!text) return example('Save Namaku!');

  const pesan = text.trim();
  let success = 0;
  let failed = 0;
  const total = participants.length;

  await ZassBtz.sendMessage(m.chat, {
    react: { text: '✔️', key: m.key }
  });

  await m.reply(`*Memulai push kontak ke ${total} anggota...*\n_Ini akan memakan waktu tergantung jumlah member dan delay ${global.delaypushkontak || 1500}ms per user._`);

  for (let member of participants) {
    try {
      await ZassBtz.sendMessage(member.id, {
        text: pesan
      }, { quoted: qloc2 });
      console.log(`[SUKSES] ${member.id}`);
      success++;
    } catch (e) {
      console.error(`[GAGAL] ${member.id}`, e);
      failed++;
    }
    await sleep(global.delaypushkontak);
  }

  return ZassBtz.sendMessage(m.chat, {
    text:
      `*✅ Push Kontak Selesai!*\n\n` +
      `• Total Member: *${total}*\n` +
      `• Berhasil: *${success}*\n` +
      `• Gagal: *${failed}*\n\n` +
      `_(Opsional) Gunakan *.savekontak* untuk menyimpan kontak nya._`,
    contextInfo: {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idch,
        newsletterName: global.namach,
      },
      externalAdReply: {
        title: "Push Kontak Berhasil",
        body: global.namabot,
        mediaType: 1,
        thumbnailUrl: global.img,
        sourceUrl: global.web,
        renderLargerThumbnail: true,
        showAdAttribution: true,
      },
    }
  }, { quoted: m });
}
break;

case 'pushkontak2': {
  if (!isGroup) return m.reply(msg.group);
  if (!isOwner) return larang();

  const groupMetadata = await ZassBtz.groupMetadata(from);
  const participants = groupMetadata.participants;

  if (!text) return example('Save Namaku!');

  const pesan = text.trim();
  let success = 0;
  let failed = 0;
  const total = participants.length;

  await ZassBtz.sendMessage(m.chat, {
    react: { text: '✔️', key: m.key }
  });

  await m.reply(`*Memulai push kontak ke ${total} anggota...*\n_Ini akan memakan waktu tergantung jumlah member dan delay ${global.delaypushkontak || 1500}ms per user._`);

  let vcfList = '';

  for (let member of participants) {
    try {
      await ZassBtz.sendMessage(member.id, { 
      text: pesan 
      },{ quoted: qloc2 });
      console.log(`[SUKSES] ${member.id}`);
      success++;

      // Tambahkan ke file vCard
      vcfList += `BEGIN:VCARD\nVERSION:3.0\nFN:Kuroko AutoSave - ${member.id.split('@')[0]}\nTEL;type=CELL;type=VOICE;waid=${member.id.split('@')[0]}:+${member.id.split('@')[0]}\nEND:VCARD\n\n`;
    } catch (e) {
      console.error(`[GAGAL] ${member.id}`, e);
      failed++;
    }
    await sleep(global.delaypushkontak || 1500); // delay dari global
  }

  // Simpan file kontak
  const vcfPath = `all/database/contacts.vcf`;
  require('fs').writeFileSync(vcfPath, vcfList);

  await ZassBtz.sendMessage(m.chat, {
    text:
      `*✅ Push Kontak Selesai!*\n` +
      `_File kontak dikirim ke private chat Anda._`,
    contextInfo: {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idch,
        newsletterName: global.namach,
      },
      externalAdReply: {
        title: "Push Kontak Berhasil",
        body: global.namabot,
        mediaType: 1,
        thumbnailUrl: global.img,
        sourceUrl: global.web,
        renderLargerThumbnail: true,
        showAdAttribution: true,
      },
    }
  }, { quoted: m });

  await ZassBtz.sendMessage(m.sender, {
    document: { url: vcfPath },
    fileName: `KontakGrup-${groupMetadata.subject}.vcf`,
    mimetype: 'text/x-vcard',
    caption:
      `*Push Kontak Selesai!*\n\n` +
      `• Grup: ${groupMetadata.subject}\n` +
      `• Total Member: ${total}\n` +
      `• Berhasil: ${success}\n` +
      `• Gagal: ${failed}\n\n` +
      `Silakan Import kontak nya jika di butuhkan.`
  });
}
break;

case 'pushkontakid': {
if (!isOwner) return larang();
const args = text.split('|');
if (args.length < 2) return example(`<id_grup>|<pesan>\nKetik *.listgc* untuk menampilkan id grup`);
    const groupId = args[0].trim(); 
    const pesan = args[1].trim(); 
    try {
    const groupMetadata = await ZassBtz.groupMetadata(groupId);
    const participants = groupMetadata.participants;

        let success = 0;
        let failed = 0;

        for (let member of participants) {
            const memberId = member.id; 
            try {
                await ZassBtz.sendMessage(memberId, { 
                text: pesan 
                }, { quoted: qloc2 }
                );
                console.log(`Pesan berhasil dikirim ke: ${memberId}`);
                success++;
            } catch (error) {
                console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
                failed++;
            }
            await sleep(global.delaypushkontak);
        }

        m.reply(`Push kontak selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    } catch (error) {
        console.error(error);
        m.reply('Gagal mendapatkan metadata grup. Pastikan ID grup benar dan bot ada di dalam grup tersebut.');
    }
}
break

case 'pushkontakid2': {
  if (!isOwner) return larang();

  const args = text.split('|');
  if (args.length < 2) return example(`<id_grup>|<pesan>\nKetik *.listgc* untuk menampilkan ID grup`);

  const groupId = args[0].trim();
  const pesan = args[1].trim();

  try {
    const groupMetadata = await ZassBtz.groupMetadata(groupId);
    const participants = groupMetadata.participants;

    let success = 0;
    let failed = 0;
    const total = participants.length;
    let vcfList = '';

    await m.reply(`*Memulai push ke ${total} anggota grup ${groupMetadata.subject}...*\n_Delay tiap user: ${global.delaypushkontak || 1500}ms_`);

    for (let member of participants) {
      try {
        await ZassBtz.sendMessage(member.id, { 
        text: pesan 
        }, { quoted: qloc2 });
        console.log(`[SUKSES] ${member.id}`);
        success++;
        const nomor = member.id.split('@')[0];
        vcfList += `BEGIN:VCARD\nVERSION:3.0\nFN:Kuroko AutoSave - ${nomor}\nTEL;type=CELL;type=VOICE;waid=${nomor}:+${nomor}\nEND:VCARD\n\n`;
      } catch (e) {
        console.error(`[GAGAL] ${member.id}`, e);
        failed++;
      }
      await sleep(global.delaypushkontak || 1500);
    }

    // Simpan file VCF
    const vcfPath = `all/database/contacts.vcf`;
    require('fs').writeFileSync(vcfPath, vcfList);

    await ZassBtz.sendMessage(m.sender, {
      document: { url: vcfPath },
      fileName: `Kontak-${groupMetadata.subject}.vcf`,
      mimetype: 'text/x-vcard',
      caption: `✅ Pushkontak ke *${total} member* selesai!\nBerhasil: *${success}*\nGagal: *${failed}*\n\nKontak tersimpan di file ini.`,
    });

  } catch (err) {
    console.error(err);
    return m.reply('Gagal mengambil metadata grup. Pastikan ID grup valid dan bot masih ada di grup.');
  }
}
break;

case 'savekontak': {
  if (!isOwner) return larang();
  if (!text.includes('|')) {
    return example("<idgc>|<namakontak>\nKetik *.listgc* untuk menampilkan idgc");
  }

  const [idgc, contactName] = text.split('|').map(v => v.trim());
  if (!idgc || !contactName) {
    return m.reply("*✖️ Input Tidak Valid!*\nPastikan ID grup dan nama kontak diisi dengan benar.");
  }

  let metadata;
  try {
    metadata = await ZassBtz.groupMetadata(idgc);
  } catch (e) {
    return m.reply("*✖️ Gagal Mendapatkan Metadata Grup!*\nPastikan ID grup benar dan bot ada di dalamnya.");
  }

  const participants = metadata.participants;
  const kontakUnik = [...new Set(
    participants
      .map(p => p.id)
      .filter(jid => jid.endsWith('@s.whatsapp.net') && jid !== m.sender)
  )];

  // Generate vCard
  let vcardList = '';
  let nomor = 1;
  for (let jid of kontakUnik) {
    const num = jid.split('@')[0];
    vcardList += `BEGIN:VCARD
VERSION:3.0
FN:${contactName} ${nomor}
TEL;type=CELL;type=VOICE;waid=${num}:+${num}
END:VCARD

`;
    nomor++;
  }

  // Simpan file
  const filePath = 'all//database/contacts.vcf';
  fs.writeFileSync(filePath, vcardList);

  await ZassBtz.sendMessage(m.sender, {
    document: fs.readFileSync(filePath),
    fileName: "kontak-saved.vcf",
    mimetype: "text/x-vcard",
    caption: `*✅ Kontak Berhasil Disimpan!*\n📁 Total: *${kontakUnik.length}* kontak.\n📌 Nama Kontak: *${contactName}*\n\n> Kuroko Botz © 2025`,
  }, { quoted: m });

  m.reply(`*✅ File kontak berhasil dibuat!*\n\nFile telah dikirim ke chat pribadi Anda.`);

  fs.unlinkSync(filePath);
}
break;

case "jpm": {
  if (!isOwner) return larang()
  if (!text) return example(`Halo semua!\nKirim foto dengan caption (opsional)`)

  let mediaPath
  if (/image/.test(mime)) {
    mediaPath = await ZassBtz.downloadAndSaveMediaMessage(qmsg)
  }

  const allGroups = await ZassBtz.groupFetchAllParticipating()
  const groupIDs = Object.keys(allGroups)
  let sentCount = 0

  const broadcastMsg = mediaPath
    ? { image: fs.readFileSync(mediaPath), caption: text }
    : { text }

  await m.reply(`*⏳ Memproses jpm...*\nJumlah grup: ${groupIDs.length}\nTipe: ${mediaPath ? "Teks + Foto" : "Teks"}`)

  for (const id of groupIDs) {
    try {
      await ZassBtz.sendMessage(id, broadcastMsg, {
        quoted: qloc
      })
      sentCount++
    } catch {}
    await sleep(global.delayjpm || 4000)
  }

  if (mediaPath) fs.unlinkSync(mediaPath)

  await ZassBtz.sendMessage(m.chat, {
    text: `*✅ Jpm Selesai!*\nBerhasil Terkirim ke *${sentCount}* grup dari total ${groupIDs.length}.`,
  }, { quoted: m })
}
break

case "jpmht": {
  if (!isOwner) return larang()
  if (!text) return example(`teks dan foto (opsional)`)

  let mediaPath
  if (/image/.test(mime)) {
    mediaPath = await ZassBtz.downloadAndSaveMediaMessage(m)
  } else if (m.quoted && /image/.test(m.quoted.mtype)) {
    
    mediaPath = await ZassBtz.downloadAndSaveMediaMessage(m.quoted)
  }

  const allGroups = await ZassBtz.groupFetchAllParticipating()
  const groupIDs = Object.keys(allGroups)
  let sentCount = 0

  await m.reply(`*⏳ Memproses hide-tag broadcast...*\nJumlah grup: ${groupIDs.length}`)

  for (const id of groupIDs) {
    const metadata = await ZassBtz.groupMetadata(id)
    const participants = metadata.participants.map(p => p.id)

    const msgContent = mediaPath
      ? { image: fs.readFileSync(mediaPath), caption: text, mentions: participants }
      : { text: text, mentions: participants }

    try {
      await ZassBtz.sendMessage(id, msgContent, { quoted: qloc })
      sentCount++
    } catch {}

    await sleep(global.jpm || 4000)
  }

  if (mediaPath) fs.unlinkSync(mediaPath)

  await ZassBtz.sendMessage(m.chat, {
    text: `*✅ Hide-tag Broadcast Selesai!*\nBerhasil terkirim ke *${sentCount}* grup.`,
  }, { quoted: m })
}
break

case 'listgc':
case 'listgrup': {
  if (!isOwner) return larang();
  
  await ZassBtz.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });

  let gcall;
  try {
    gcall = Object.values(await ZassBtz.groupFetchAllParticipating());
  } catch (e) {
    return m.reply("*✖️ Gagal mengambil daftar grup.*");
  }

  let teks = `*📦 Daftar Grup Terkait (${gcall.length} Grup):*\n\n`;
  gcall.forEach((group, index) => {
    teks += `*${index + 1}. ${group.subject}*\n`;
    teks += `├ ID: ${group.id}\n`;
    teks += `├ Member: ${group.participants.length}\n`;
    teks += `├ Status: ${group.announce ? "🔒 Tertutup" : "🔓 Terbuka"}\n`;
    teks += `└ Pembuat: ${group.owner ? "@" + group.owner.split('@')[0] : '✖️ Tidak Diketahui'}\n\n`;
  });

  ZassBtz.sendMessage(m.chat, {
    text: teks,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: `📁 ${gcall.length} Grup Aktif`,
        body: `🧩 Kuroko Botz System`,
        sourceUrl: global.web,
        thumbnail: await getBuffer(global.img),
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
}
break;

case 'cekidgc': case 'getidgrup': {
if (!isOwner) return larang()
if (!q) return example(`link grupnya`)
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
ZassBtz.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
let tekse = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
m.reply(tekse)
})}
break

// Project jpmch ngab tapi batal soalnya waktuku habis, lanjut sendiri aja yah
/*case "cekidch":
case "idch": {
  if (!isOwner) return larang();
  if (!text) return m.reply("linkch nya\nBisa banyak sekaligus, pisahkan dengan spasi atau enter");

  await ZassBtz.sendMessage(m.chat, { react: { text: "⏳", key: m.key }});

  const links = text.match(/https:\/\/whatsapp\.com\/channel\/[a-zA-Z0-9]+/g);
  if (!links || links.length === 0) return m.reply("*✖️ Tidak ditemukan link channel yang valid.*");

  let hasil = `*『 Channel ID Result 』*\n\n`;

  for (let link of links) {
    try {
      const kode = link.split("/channel/")[1];
      const res = await ZassBtz.newsletterMetadata("invite", kode);

      hasil += `• *${res.name}*\n*ID:* ${res.id}\n\n`;
      await sleep(1500);
    } catch (err) {
      hasil += `• *Gagal Ambil ID:*\n> ${link}\n\n`;
    }
  }

  return ZassBtz.sendMessage(m.chat, {
    text: hasil.trim(),
    contextInfo: {
      externalAdReply: {
        title: "Kuroko Channel ID Checker",
        body: `Powered By ${namaowner}`,
        thumbnail: await getBuffer(global.img),
        sourceUrl: global.web,
        previewType: "PHOTO"
      }
    }
  }, { quoted: m });
}
break;

case 'addidch': {
  if (!isOwner) return larang();
  if (!text) return example("123@newsletter atau linkch nya\n\n(bisa banyak, pisahkan dengan spasi/enter)");

  await ZassBtz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

  if (!global.db.channel) global.db.channel = [];

  const inputs = text.trim().split(/\s+/);
  let hasil = `*『 Hasil Tambah Channel 』*\n\n`, added = 0, dupe = 0, gagal = 0;

  for (let input of inputs) {
    let id = input.trim();

    // Jika berupa link channel
    if (id.includes("whatsapp.com/channel/")) {
      const kode = id.split("/channel/")[1]?.split(/[^\w]/)[0];
      try {
        const res = await ZassBtz.newsletterMetadata("invite", kode);
        if (res?.id) {
          id = res.id;
          hasil += `• *${res.name}*\n> ID: ${res.id} ✅\n\n`;
          await sleep(1500);
        } else {
          gagal++;
          hasil += `• *Gagal Ambil ID:*\n> ${input} ✖️\n\n`;
          continue;
        }
      } catch {
        gagal++;
        hasil += `• *Gagal Ambil ID:*\n> ${input} ✖️\n\n`;
        continue;
      }
    }

    // Validasi format ID
    if (!id.endsWith("@newsletter")) continue;

    // Cek & masukkan ke database
    if (!global.db.channel.includes(id)) {
      global.db.channel.push(id);
      added++;
    } else {
      dupe++;
      hasil += `• *Sudah Ada:*\n> ${id} ⚠️\n\n`;
    }
  }

  global.saveChannelDb();

  await ZassBtz.sendMessage(m.chat, {
    react: {
      text: added > 0 ? "✅" : "⚠️",
      key: m.key
    }
  });

  return ZassBtz.sendMessage(m.chat, {
    text: hasil.trim(),
    contextInfo: {
      externalAdReply: {
        title: "Kuroko Channel Control",
        body: `Ditambahkan: ${added}, Duplikat: ${dupe}, Gagal: ${gagal}`,
        thumbnail: await getBuffer(global.img),
        sourceUrl: global.web,
        previewType: "PHOTO"
      }
    }
  }, { quoted: m });
}
break;
*/

case "autoread": {
if (!isOwner) return larang()
if (!text) return example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
if (text.toLowerCase() == "on") {
if (autoread) return m.reply("*Autoread* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoread = true
m.reply("*Berhasil Menyalakan Autoread ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!autoread) return m.reply("*Autoread* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoread = false
m.reply("*Berhasil Mematikan Autoread ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break

case "autoreadsw": {
if (!isOwner) return larang()
if (!text) return example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
if (text.toLowerCase() == "on") {
if (autoreadsw) return m.reply("*Autoreadsw* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoreadsw = true
m.reply("*Berhasil Menyalakan Autoreadsw ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!autoreadsw) return m.reply("*Autoread* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoreadsw = false
m.reply("*Berhasil Mematikan Autoreadsw ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
}}
break

case "anticall": {
if (!isOwner) return larang()
if (!text) return example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
if (text.toLowerCase() == "on") {
if (anticall) return m.reply("*Anticall* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
anticall = true
m.reply("*Berhasil Menyalakan Anticall ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!anticall) return m.reply("*Anticall* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
anticall = false
m.reply("*Berhasil Mematikan Anticall ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return m.reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
}}
break

case "setting": case "settingbot": case "option": case "statusbot": {
if (!isOwner) return larang()
var teks = `
*List Status Setting Bot :*

* Autoread : ${global.autoread ? "*Aktif*" : "*Tidak Aktif*"}
* Autoreadsw : ${global.autoreadsw ? "*Aktif*" : "*Tidak Aktif*"}
* Anticall : ${global.anticall ? "*Aktif*" : "*Tidak Aktif*"}

*Contoh Penggunaan :*
Ketik *.autoread* on/off`
m.reply(teks)
}
break

case "del": case "delete": {
if (isGroup) {
if (!isOwner) return larang();
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
ZassBtz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return m.reply(msg.adminbot)
ZassBtz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return larang()
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
ZassBtz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break

case "joingc": case "join": {
if (!isOwner) return larang()
if (!text && !m.quoted) return example('linknya')
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return m.reply("Link Tautan Tidak Valid!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await ZassBtz.groupAcceptInvite(result).then(respon => m.reply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => m.reply(error.toString()))
}
break
case "leave": case "leavegc": {
if (!isOwner) return larang()
if (!isGroup) return m.reply(msg.group)
await m.reply("Otw Bosss")
await sleep(3000)
await ZassBtz.groupLeave(m.chat)
}
break
case "leavegc2": case "leave2": {
if (!isOwner) return larang()
let gcall = await Object.values(await ZassBtz.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Penggunaan :*\nKetik *${cmd}* Nomor Grup\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
ZassBtz.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return m.reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await m.reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await ZassBtz.groupLeave(`${gcall[leav].id}`)
}}
break
case'cekkhodam': 
 if (!text) return m.reply('Nama nya mana yang mau di cek khodam nya')
function pickRandom(list) {
 return list[Math.floor(Math.random() * list.length)]
}
 m.reply(`
╭━━━━°「 *Khodam ${text}* 」°
┃
┊• Nama : ${text}
┊• Khodam : ${pickRandom(['Macan Tutul', 'Gajah Sumatera', 'Orangutan', 'Harimau Putih', 'Badak Jawa', 'Pocong', 'Kuntilanak', 'Genderuwo', 'Wewe Gombel', 'Kuyang', 'Lembuswana', 'Anoa', 'Komodo', 'Elang Jawa', 'Burung Cendrawasih', 'Tuyul', 'Babi Ngepet', 'Sundel Bolong', 'Jenglot', 'Lele Sangkuriang', 'Kucing Hutan', 'Ayam Cemani', 'Cicak', 'Burung Merak', 'Kuda Lumping', 'Buaya Muara', 'Banteng Jawa', 'Monyet Ekor Panjang', 'Tarsius', 'Cenderawasih Biru', 'Setan Merah', 'Kolor Ijo', 'Palasik', 'Nyi Roro Kidul', 'Siluman Ular', 'Kelabang', 'Beruang Madu', 'Serigala', 'Hiu Karang', 'Rajawali', 'Lutung Kasarung', 'Kuda Sumba', 'Ikan Arwana', 'Jalak Bali', 'Kambing Etawa', 'Kelelawar', 'Burung Hantu', 'Ikan Cupang'])}
┊• Mendampingi dari : ${pickRandom(['1 tahun lalu','2 tahun lalu','3 tahun lalu','4 tahun lalu','dari lahir'])}
┃• Expired : ${pickRandom(['2024','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035'])}
╰═┅═━––––––๑`)
break

case'cekkontol': 
 if (!text) return m.reply('Nama nya mana yang mau di cek kontol nya')
function pickRandom(list) {
 return list[Math.floor(Math.random() * list.length)]
}

	
 m.reply(`
╭━━━━°「 *Kontol ${text}* 」°
┃
┊• Nama : ${text}
┃• Kontol : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
┊• True : ${pickRandom(['perjaka','ga perjaka','udah pernah dimasukin','masih ori','jumbo'])}
┃• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
┃• ukuran : ${pickRandom(['1cm','2cm','3cm','4cm','5cm','20cm','45cm','50cm','90meter','150meter','5km','gak normal'])}
╰═┅═━––––––๑`)
break
case "ambilq": {
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
m.reply(jsonData)
}
break
case "dana": {
if (global.dana == false) return m.reply('Payment Dana Tidak Tersedia')
let teks = `
*Nomor Dana :*
${global.dana}
*A/N :* ${global.namadana}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
await ZassBtz.sendText(m.chat, teks, qchanel)
}
break
case "ovo": {
if (global.ovo == false) return m.reply('Payment Ovo Tidak Tersedia')
let teks = `
*Nomor Ovo :*
${global.ovo}
*A/N :* ${global.namaovo}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
await ZassBtz.sendText(m.chat, teks, qchanel)
}
break
case "gopay": {
if (global.gopay == false) return m.reply('Payment Gopay Tidak Tersedia')
let teks = `
*Nomor Gopay :*
${global.gopay}
*A/N :* ${global.namagopay}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
await ZassBtz.sendText(m.chat, teks, qchanel)
}
break
case "qris": {
  if (!global.qris) return m.reply('Payment QRIS Tidak Tersedia')
  m.reply('Memproses Mengambil QRIS, Tunggu Sebentar . . .')

  let teks = `
*Untuk Pembayaran Melalui QRIS All Payment, Silahkan Scan Foto QRIS Diatas Ini*
_WAJIB TAMBAH 500P KALAU PAKAI QRIS_
*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
  `.trim()

await ZassBtz.sendMessage(
    m.chat,
    {
      image: { url: global.qris }, // penting: bungkus dengan { url: ... }
      caption: teks
    },
    { quoted: qchanel }
  )
  break
}
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return ZassBtz.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return ZassBtz.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
ZassBtz.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
ZassBtz.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return ZassBtz.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return ZassBtz.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}}
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})