'use strict';
//Telegram Client
const TelegramBot = require('node-telegram-bot-api');
const token = '364382665:AAELEnfTxGMgS4saTUwVfQu7nF3yoYf-Deg';
const bot = new TelegramBot(token, {polling: true});

const buttons = require('./src/scripts/buttons');

//PostresClient
//const {} = require('pg');

//вывод меню языка
bot.on('text', (msg) => {
    var chatId = msg.chat.id;
    var messageText = msg.text;
    if(messageText==='/start'){
        bot.sendMessage(chatId,"Choose your lang.\n\rВыберете Ваш язык.", buttons.startButtons);
        //console.log(msg, buttons.startButtons);
    }
});

//Действие на выбор языка
bot.on("callback_query", (callbackQuery) => {
    const msg = callbackQuery.message;

                ///////////////////Действия на выбор языка////////////////////////

    //вывод русского меню расписаний            
    if(callbackQuery.data === 'rus'){
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendMessage(msg.chat.id, "Приветствую любителя зимних видов спорта!\n\r"+
                                                "Я могу помочь узнать всю информацию о соревнованиях. Для этого выберите один из пунктов.",buttons.menuButtons));    
    }
    //вывод английского меню расписаний
    if(callbackQuery.data ==='eng'){
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendMessage(msg.chat.id, "****",buttons.menuButtons));
    } 
    
                ////////////////Действие на выбор из меню/////////////////
    //вывод списка локаций
    if(callbackQuery.data ==='location'){
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendMessage(msg.chat.id, "Выберите один из спортивных объектов", buttons.locationButtons));            
    }


                ////////////////Вывод сегодняшних событий//////////////////
    if(callbackQuery.data ==='today'){
        const today = new Date();
        console.log(today.getDate());
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendMessage(msg.chat.id, "Выберите один из спортивных объектов"));            
    }

    
                ////////////////Действия на вывод по дате/////////////////////////
    if(callbackQuery.data ==='date'){
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendMessage(msg.chat.id, "Выберите дату", buttons.calendarButtons));
                    
    }
                ///////////////вывод по дням////////////
    var keyboard = buttons.calendarButtons.reply_markup;
    keyboard = JSON.parse(keyboard, function(k,v){
    if(k === 'callback_data'){      
        var times = v;
        console.log(callbackQuery.data,times);
        }
    });  
    if(callbackQuery.data === times){
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendMessage(msg.from.id, "В эти дни пройдут следующие события:\n\r"+times))
    }

                ////////////////Действия после выбранной локации///////////////////
    //Возврат информации о локациях с перенаправлением в навигатор
    if(callbackQuery.data === 'rassvet'){
        const latitude = 56.0214;
        const longitude = 92.7915;
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendLocation(msg.chat.id, latitude, longitude) && bot.sendMessage(msg.chat.id, "Высотная ул.,д.2л стр. 4"));            
    }
});


