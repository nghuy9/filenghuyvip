module.exports.config = {
  name: 'autosend2',
  version: '10.02',
  hasPermssion: 2,
  credits: 'DC-Nam',//mod lại by nghuy
  description: 'Tự động gửi tin nhắn theo giờ đã cài!',
  commandCategory: 'Hệ thống',
  usages: '[]',
  cooldowns: 3
};


const r = a => a[Math.floor(Math.random() * a.length)],
  {
    get
  } = require('axios'),
  config = [{
    timer: '10:00:00 PM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '9:00:00 PM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n 💬: NgHuydzs1tg \n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '4:00:00 AM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 Hello cả nhà\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '5:00:00 AM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 các bạn sử dụng bot vui vẻ \n━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '6:00:00 AM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n Trời buồn trời đổ cơn mưa\n Em buồn em ngủ từ trưa tới chiều\n\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '7:00:00 AM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n Chào buổi sáng\n\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '8:00:00 AM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n Buổi sáng vv\n\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '9:00:00 AM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n[💬]: Em ăn cơm chưa\n\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '10:00:00 AM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n[💬]: Bắt đầu từ đáy… Vẫn còn ở dưới đáy\n\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '11:00:00 AM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n[💬]: ♥️ ♥️ ♥️ \n\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '12:00:00 AM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n[💬]: Buổi Trưa vv \n\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '1:00:00 PM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n[💬]: Chiều r đó \n\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '2:00:00 PM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time}\n Done cho Ad ít đi ❗  \n\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '3:00:00 PM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n[💬]: Chào em nha \n\n━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '4:00:00 PM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n[💬]: Free Fire \n\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '5:00:00 PM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n[💬]: Buổi chiều tà \n\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '6:00:00 PM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n[💬]: Can than hai hon dai cua may \n\n━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '7:00:00 PM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n[💬]: khè \n\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  },

  {
    timer: '8:00:00 PM',
    message: ['==== 「 𝐀𝐔𝐓𝐎 𝐒𝐄𝐍𝐃 」 ====\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n\n khè \n\n━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
  }];

module.exports.onLoad = o => {
  if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
  global.autosendmessage_setinterval = setInterval(async function() {
    if (á = config.find(i => i.timer == new Date(Date.now() + 25200000).toLocaleString().split(/,/).pop().trim())) {
      var msg = r(á.message);
      msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)"));
      global.data.allThreadID.forEach(i => o.api.sendMessage({ body: msg }, i));
    };
  }, 1000);
};

module.exports.run = () => { };