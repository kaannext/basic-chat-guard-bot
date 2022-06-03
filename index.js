const Discord = require("discord.js");
const AntiSpam = require("discord-anti-spam");
const SETTİNGS  = require("./settings.json");
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});


const antiSpam = new AntiSpam({
  warnThreshold: SETTİNGS.WARNİNG.warnThreshold, 
  muteThreshold: SETTİNGS.WARNİNG.muteThreshold, 
  kickThreshold: SETTİNGS.WARNİNG.kickThreshold, 
  banThreshold: SETTİNGS.WARNİNG.banThreshold, 
  maxInterval: SETTİNGS.WARNİNG.maxInterval, 
  warnMessage: SETTİNGS.warnMessage, 
  kickMessage: SETTİNGS.kickMessage, 
  muteMessage: SETTİNGS.muteMessage,
  banMessage: SETTİNGS.banMessage, 

  maxDuplicatesWarning: SETTİNGS.WARNİNG.maxDuplicatesWarning, 
  maxDuplicatesKick: SETTİNGS.WARNİNG.maxDuplicatesKick, 
  maxDuplicatesBan: SETTİNGS.WARNİNG.maxDuplicatesBan, 
  maxDuplicatesMute: SETTİNGS.WARNİNG.maxDuplicatesMute, 

  ignoredPermissions: SETTİNGS.PERMİSSİONS.ignoredPermissions, 
  ignoreBots: SETTİNGS.PERMİSSİONS.ignoreBots, 
  verbose: SETTİNGS.PERMİSSİONS.verbose,
  ignoredMembers: SETTİNGS.PERMİSSİONS.ignoredMembers, 
  unMuteTime: SETTİNGS.WARNİNG.unMuteTime, 
  removeMessages: SETTİNGS.WARNİNG.removeMessages, 
  modLogsEnabled: SETTİNGS.BOT_LOGS.modLogsEnabled, 
  modLogsChannelName: SETTİNGS.BOT_LOGS.modLogsChannelName, 
  modLogsMode: SETTİNGS.BOT_LOGS.modLogsMode,
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}.`)

});

client.on("messageCreate", (message) => antiSpam.message(message));

client.login(SETTİNGS.BOT_SETTİNGS.BOT_TOKEN);