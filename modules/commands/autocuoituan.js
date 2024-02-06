module.exports.config = {
  name: 'Autocuoituan',
  version: '1.0.0',
  hasPermssion: 3,
  credits: 'Vtuan',
  description: 'Gửi tin nhắn tự động vào cuối tuần',
  commandCategory: 'Hệ thống',
  usages: '',
  cooldowns: 3
};
const weekendMessages = [
  {
    timer: '9:00:00 AM',
    saturdayMessage: [
    'Đã cuối tuần rồi sao, Yuri chúc tất cả mọi người trong box có 1 ngày cuối tuần thật vui vẻ!', 
      
    'Bận rộn cả tuần cũng có được ngày nghỉ, tớ là Yuri xin chúc tất cả mọi người có 1 ngày nghỉ hạnh phúc bên gia đình và người thân<3',

    'Tớ là Yuri xin chúc tất cả mọi người có 1 ngày nghỉ thật vui vẻ, xóa hết nỗi buồn để có 1 tuần đầy năng lượng<3',

      'Hãy làm tất cả những việc mà bạn cho là thoải mái nhất nhé,hãy xả stress để có 1 ngày mới đầy năng lượng'
    ],
    
    sundayMessage: ['Chủ Nhật rồi, chuẩn bị tâm lý để bắt đầu tuần mới thôi nào!', 
                    
                    'Chúc mọi người một Chủ Nhật thật nhiều năng lượng!']
  },
  {
    timer: '7:00:00 PM',
    saturdayMessage: ['Thời gian để relax và xả strees đã đến, thưởng thức tối Thứ Bảy thôi nào!', 'Đêm Thứ Bảy, là thời gian để tự thưởng cho mình sau 1 tuần làm việc!'],

    
    sundayMessage: ['Vào lúc 00:01 ngày đầu tuần, Hệ thống bot Yuri sẽ tự động reset data checktt của tất cả các nhóm, các bạn quản trị viên chú ý lọc thành viên nhé\n!check - để xem tất cả tương tác cuối tuần\n!check loc= <số tin nhắn muốn lọc> - để bot tự lọc thành viên nhé']
  }
];
function getWeekendMessage(isSaturday) {
  const currentMessages = weekendMessages.find(({ timer }) =>
    timer == new Date(Date.now() + 25200000).toLocaleString().split(/,/).pop().trim()
  );

  
  if (currentMessages) {
    return isSaturday ? currentMessages.saturdayMessage : currentMessages.sundayMessage;
  }
  return null;
}
// Hàm trợ giúp để tính toán khoảng thời gian đến 00:02 Thứ Hai tuần kế tiếp
function getMillisecondsUntilMonday002() {
  const now = new Date();
  const daysUntilMonday = (7 - now.getDay()) % 7;
  const nextMonday002 = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + daysUntilMonday,
    0, 2, 0, 0
  );
  return nextMonday002.getTime() - now.getTime();
}

module.exports.onLoad = async ({ global, api }) => {

  setInterval(() => {
    const today = new Date().getDay();
   
    if (today === 6 || today === 0) {
      const isSaturday = today === 6;
      const messageArray = getWeekendMessage(isSaturday);
      if (messageArray) {
        const randomMessage = messageArray[Math.floor(Math.random() * messageArray.length)];
        global.data.allThreadID.forEach(threadID => api.sendMessage(randomMessage, threadID));
      }
      // Đặt trễ (timeout) để xóa dữ liệu vào 00:02 ngày Thứ Hai
// Nếu hôm nay là Chủ Nhật, thiết lập trễ để reset data và khởi động lại bot
if (today === 0) {
  const millisecondsUntil002 = getMillisecondsUntilMonday002();
  if (millisecondsUntil002 > 0) {
    setTimeout(() => {
      // Xóa data trong thư mục tuongtac
      exec('rm -fr modules/commands/tuongtac/*', (error, stdout, stderr) => {
        if (error) {
          console.error(`Lỗi khi reset dữ liệu: ${error}`);
          return;
        }
        if (stderr) {
          console.error(`Lỗi khi thực hiện lệnh: ${stderr}`);
          return;
        }
        // Thông báo khi dữ liệu đã được reset
        console.log('Dữ liệu tuongtac đã được reset.');
      });
      // Khởi động lại bot
      global.data.allThreadID.forEach(threadID => {
        api.sendMessage('Hệ thống bot sẽ được khởi động lại ngay bây giờ!', threadID, () => process.exit(1));
      });
    }, millisecondsUntil002);
  }
}
}
}, 1000 * 60 * 60); // Kích hoạt mỗi giờ một lần
};
module.exports.run = function ({}) {};