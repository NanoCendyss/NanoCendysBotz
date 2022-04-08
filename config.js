/*
Hai !!
My Name's Stev.
My Nickname's Nano Cendys
I'm From Banyuwangi, Jawa Timur, Indonesia
I'm Amateur Programmer :D
Just Copy Paste Code!
Hehe...
Thanks For Using This Script!!

TQTO:
Thanks to ALLAH | TUHAN YME
Thanks to Nurutomo as wabot-aq
Thanks to Ariffb as Stikerinbot
Thanks to Botstylee
Thanks to Bochilgaming as games-wabot
Thanks to ZerochanBot
Thanks to Fernazer
Thanks to MikeBot Dev Team
Thanks to All Bot Creator
Thanks to Who Support My Botz
*/
//*________________________________________*\\

let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let wktu = moment.tz('Asia/Jakarta').format('HH:mm:ss')

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}


global.DeveloperMode = 'false' //Buat Mode True False Moderator
global.linkGC = ['https://chat.whatsapp.com/Bo2R9n7xmC0F4nEfEEgOU7'] // Change to Your Group Link
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Change Your Number In owner.json 
global.mods = ['13152040074'] // Want Some Help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium User has Unlimited Limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'APIKEY',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'APIKEY',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'wEDTUsWj',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'NanoCendysвσтz\n\n\n𝙱𝚢 Stev.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.'
global.author = '۰ ⸼'

// Silahkan di Ganti Kalo Mau
global.botwm = `🤖 NanoCendysвσтz`//UBAH JADI NAMAMU
global.wm = `꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘Nano Cendys˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷`
global.botdate = `❏ ${wktu}\n❏ ${week} ${date}`
global.imagebot = `https://telegra.ph/file/f28bec0a5892e3f9682c1.jpg`
global.logo = fs.readFileSync('./src/logo3.jpg')
global.thumb1 = 'https://i.ibb.co/N7rx3zh/20220325-213250.png'
global.thumb2 = 'https://telegra.ph/file/f87047ec6e5f0d4a9ea91.jpg'
global.thumb3 = 'https://telegra.ph/file/88edbb01051b397574def.jpg'
global.thumb4 = 'https://telegra.ph/file/7957630a57078c5ec0400.jpg'
global.logoowner = fs.readFileSync('./src/owner.jpg')
global.wait = '```[ ! ] Wait...```'
global.rpg = '[ ! ] Fitur Rpg Dimatikan\nKetik *!enable* *rpg* Untuk Menggunakan Fitur Ini!\nKalo Mau Main Disini Aja\nhttps://chat.whatsapp.com/Bo2R9n7xmC0F4nEfEEgOU7'
global.nsfw = '[ ! ] Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* Untuk Menggunakan Fitur Ini!\n“Katakanlah Kepada Orang laki-laki yang Beriman: Hendaklah Mereka Menahan Pandanganya, dan Memelihara Kemaluannya; … Katakanlah Kepada Wanita yang Beriman: Hendaklah Mereka Menahan Pandangannya, dan Kemaluannya, dan Janganlah Mereka Menampakkan Perhiasannya, Kecuali Yang (Biasa) Nampak dari Padanya”.'
global.eror = '```404 ERROR```'
global.pref = '( # . ! /)'
global.CanvasAPI = '';
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// Tingkat Kesulitan, Semakin Tinggi Semakin Susah
global.multiplier = 38 // The higher, The Harder Levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
