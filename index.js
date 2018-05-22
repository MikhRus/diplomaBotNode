const TelegramBot = require('node-telegram-bot-api');

const token = '364382665:AAELEnfTxGMgS4saTUwVfQu7nF3yoYf-Deg';

const bot = new TelegramBot(token, {polling: true});




bot.onText(/\/echo (.+)/, (msg, match) => {


    const chatId = msg.chat.id;
    const resp = match[1];
    const url = `http://bik.sfu-kras.ru/nb/search?query=${resp}&type=Author`
    console.log(resp);
    bot.sendMessage(chatId, url);
});

bot.onText(/\/add (.+)/, (msg, match) => {
    const chatId = msg.chat.id;

    const arr = match[1].split(' ');
    var resp=0;
    for (var i = 0; i<arr.length; i++){
        console.log(arr[i]);
        resp +=  parseInt(arr[i]);
    }
    console.log(resp);
    bot.sendMessage(chatId, resp);

    console.log(arr);
});

/*bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});*/

