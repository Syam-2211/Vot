require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const { sleep } = require("./all/myfunc.js")  
const { loadModule } = require("./all/function.js")  
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function startSesi() {
const matrixKuroko = require('./all/zassmatrix.js');
await matrixKuroko();
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
printQRInTerminal: !usePairingCode,
version: [2, 3000, 1017531287],    
logger: pino({ level: "fatal" }),
auth: state,
browser: ["Ubuntu","Chrome","20.0.04"],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: '「 🕊🦋⃝♥⃝ѕиєнα🍁♥⃝🦋⃝🕊 」'
}}
}

const ZassBtz = func.makeWASocket(connectionOptions)
if (usePairingCode && !ZassBtz.authState.creds.registered) {
  const phoneNumber = await question(chalk.magentaBright.bold('\n[KUROKO] Masukkan nomor target (format 62xxxx):\n>> '))
  const code = await ZassBtz.requestPairingCode(phoneNumber.trim())
  console.log(`\n${chalk.redBright.bold('[AUTH CODE]')} ${chalk.whiteBright(code.split("").join(" "))}\n`)
}

store?.bind(ZassBtz.ev)

ZassBtz.ev.on('connection.update', async (update) => {
  const { connection, lastDisconnect } = update

  if (connection === 'close') {
    const reason = new Boom(lastDisconnect?.error)?.output.statusCode
    console.log(chalk.bgBlack.redBright('\n[ !! ] FATAL DISCONNECT:') + chalk.red(` ${lastDisconnect?.error?.message || "Unknown Error"}\n`))

    if (lastDisconnect.error?.message === 'Stream Errored (unknown)') {
      console.log(chalk.gray('[KUROKO] Stream corrupted. Exiting...'))
      process.exit()
    } else if (reason === DisconnectReason.badSession) {
      console.log(chalk.bgRedBright('× BAD SESSION ×') + chalk.white('\n→ Hapus file session dan lakukan pairing ulang.'))
      process.exit()
    } else if (reason === DisconnectReason.connectionClosed) {
      console.log(chalk.gray('\n[KUROKO] Link terminated.\n→ Rebooting connection...'))
      process.exit()
    } else if (reason === DisconnectReason.connectionLost) {
      console.log(chalk.yellowBright('\n[KUROKO] Signal disruption.\n→ Attempting link recovery...'))
      process.exit()
    } else if (reason === DisconnectReason.connectionReplaced) {
      console.log(chalk.redBright('\n[INTRUSION DETECTED]\n→ Sesi digantikan. Menghentikan koneksi.'))
      ZassBtz.logout()
    } else if (reason === DisconnectReason.loggedOut) {
      console.log(chalk.bgMagenta('\n[LOGGED OUT]\n→ Perangkat keluar dari sesi. Pairing ulang diperlukan.'))
      ZassBtz.logout()
    } else if (reason === DisconnectReason.restartRequired) {
      console.log(chalk.cyan('\n[REBOOT REQUIRED] Memulai ulang sesi...'))
      await startSesi()
    } else if (reason === DisconnectReason.timedOut) {
      console.log(chalk.yellow('\n[KUROKO] Waktu koneksi habis.\n→ Reconnecting...'))
      startSesi()
    } else {
      console.log(chalk.red('\n[UNKNOWN FAILURE] Anomali tidak dikenal.'))
      process.exit()
    }

  } else if (connection === 'connecting') {
    console.log(chalk.magentaBright('\n[KUROKO] Membangun koneksi antar dimensi...'))
  } else if (connection === 'open') {
    const figlet = require("figlet")
    console.clear()
    console.log(chalk.green(figlet.textSync("KUROKO Z", { font: "ANSI Shadow" })))
    console.log(chalk.cyanBright('「Kuroko Protocol Active」'))
    console.log(chalk.gray('────────────────────────────────────────────'))
    console.log(chalk.whiteBright(`> LINKED TO: ${ZassBtz.user.id.split(":")[0]}`))
    console.log(chalk.whiteBright(`> STATUS: ONLINE`))
    console.log(chalk.whiteBright(`> MODE: VOID SCANNING`))
    console.log(chalk.gray('────────────────────────────────────────────\n'))

    const teksnotif = `「Kuroko Alert」\nUnit ZassBtz aktif di node:\n>> ${ZassBtz.user.id.split(":")[0]}`
    ZassBtz.sendMessage("6285298027445@s.whatsapp.net", { text: teksnotif })

    await loadModule(ZassBtz)
  }
})

ZassBtz.ev.on('call', async (user) => {
if (!global.anticall) return
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await ZassBtz.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {showAdAttribution: true, thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ CALL DETECTED ｣", previewType: "PHOTO"}}}, {quoted: null})
ZassBtz.sendContact(ff.from, [owner], "Developer WhatsApp Bot", sendcall)
await sleep(10000)
await ZassBtz.updateBlockStatus(ff.from, "block")
}}
}})

ZassBtz.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.isBaileys) return
if (m.key && m.key.remoteJid === 'status@broadcast') {
if (global.autoreadsw) ZassBtz.readMessages([m.key])
}
let fill = [global.owner, "6285298027445"]
if (!ZassBtz.public && !fill.includes(m.key.remoteJid.split("@")[0]) && !m.key.fromMe && chatUpdate.type === 'notify') return
if (global.autoread) ZassBtz.readMessages([m.key])
m = func.smsg(ZassBtz, m, store)
require("./kuro-z")(ZassBtz, m, store)
} catch (err) {
console.log(err)
}
})

ZassBtz.public = true

ZassBtz.ev.on('creds.update', saveCreds)
return ZassBtz
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})