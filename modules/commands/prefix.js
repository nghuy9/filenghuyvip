module.exports.config = {
  name: "prefix",	
  version: "4.0.0", 
  hasPermssion: 0,
  credits: "Vtuan",
  description: "sos", 
  commandCategory: "Không cần dấu lệnh",
  usages: "",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event, Threads }) {
  const request = require('request');
  const fs = require("fs");
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const timeStart = Date.now();
  if (body.toLowerCase() == "Prefix" || (body.toLowerCase() == "prefix")) {
          return api.sendMessage({
        body: `====『 𝐏𝐫𝐞𝐟𝐢𝐱 』====\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n→ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦 𝐧𝐚̀𝐲 𝐥𝐚̀: ${prefix}\n→ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐭𝐫𝐞̂𝐧 𝐡𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠 𝐛𝐨𝐭 𝐥𝐚̀: ${global.config.PREFIX}\n→ 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐜𝐨́ ${client.commands.size} 𝐥𝐞̣̂𝐧𝐡 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠.\n→ 𝐀𝐝𝐦𝐢𝐧: m.me/100092744481406\n▱▱▱▱▱▱▱▱▱▱▱▱▱`},event.threadID,event.messageID);
 }
}
module.exports.run = async ({ api, event, args, Threads }) => {}


