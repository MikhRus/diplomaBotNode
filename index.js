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
        bot.sendMessage(chatId,"Choose your language.\n\rВыберете Ваш язык.", buttons.startButtons);
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
                    //////////////Действия на вывод по дисциплинам//////////////////////
    if(callbackQuery.data ==='discipline'){
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendMessage(msg.chat.id, "Выберите вид спорта", buttons.disciplinesButtons));                  
    }

                ////////////////Действия после выбранной локации///////////////////
    //Возврат информации о локациях с перенаправлением в навигатор
    if(callbackQuery.data === 'rassvet'){
        const latitude = 56.0214;
        const longitude = 92.7915;
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendLocation(msg.chat.id, latitude, longitude) && bot.sendMessage(msg.chat.id, "Высотная ул.,д.2л стр. 4"));            
    }
                                ///////////КОСТЫЛИЩИЩИЩЕ////////////
    if(callbackQuery.data === 'platina'){
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendMessage(msg.chat.id, "🗓 3 марта\n\rСпортивное ориентирование, Акадения биатлона, 8:00, Женщины, Общий старт-мидл\n\r"+
                                                    "Фристайл, Фан-парк 'Бобровый лог', 10:20, Мужчины, Могул\n\r"+
                                                    "Горнолыжный спорт, Фан-парк 'Бобровый лог', 13:00, Мужчины, Гигантский слалом\n\r"+
                                                    "Фигурнре катание, Платинум Арена Красноярск, 10:00, Парное катание\n\r"+
                                                    "Шорт-трек, Арена-Север, 15:00, 1500м, эстафета\n\r"));            
    }
                                ///////////КОСТЫЛИЩИЩИЩЕ 2.0////////////
    if(callbackQuery.data === 'sky'){
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendMessage(msg.chat.id, "⛷Горнолыжный спорт\n\r3 марта, 13:00, Мужчины, Гигинтский слалом, Квалификация\n\r"+
                                                    "4 марта, 8:00-10:00, Мужчины, Гигинтский слалом, Квалификация\n\r"+
                                                    "4 марта, 11:00, Мужчины, Гигинтский слалом, Финал\n\r"+
                                                    "5 марта, 8:00-10:00, Женщины, Гигинтский слалом, Квалификация\n\r"+
                                                    "5 марта, 11:00, Женщины, Гигинтский слалом, Финал\n\r"+
                                                    "6 марта, 8:30-10:30, Мужчины, Супергигант, Квалификация\n\r"+                                               
                                                    "6 марта, 10:30, Мужчины, Супергигант, Финал\n\r"+
                                                    "7 марта, 8:30-10:30, Женщины, Супергигант, Квалификация\n\r"+                                               
                                                    "7 марта, 10:30, Женщины, Супергигант, Финал\n\r"+
                                                    "8 марта, 9:30-12:20, Мужчины, Слалом, Квалификация\n\r"+                                               
                                                    "8 марта, 12:20, Мужчины, Слалом, Финал\n\r"+
                                                    "9 марта, 9:30-12:20, Женщины, Слалом, Квалификация\n\r"+                                               
                                                    "9 марта, 12:20, Женщины, Слалом, Финал\n\r"
                                                    ));
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
    var leng = keyboard.length;
    keyboard = JSON.parse(keyboard, function(k,v){
        if(k === 'callback_data'){      
            
        }
    });  
    if(callbackQuery.data === times){
        bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendMessage(msg.chat.id, "В эти дни пройдут следующие события:\n\r"+times))
    }


});


