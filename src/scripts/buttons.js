var startButtons = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        inline_keyboard: 
        [
            [
                {text: `Русский 🇷🇺`, callback_data:'rus'},
                {text: `English 🇬🇧`, callback_data:'eng'}
            ]
        ]
    })
};

var menuButtons = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        inline_keyboard: 
        [
            [{text: `Сегодня`, callback_data:'today'}],
            [{text: `Расписание по дате`, callback_data:'date'}],
            [{text: `Расписание по виду спорта`, callback_data:'discipline'}],
            [{text: `Расположение спортивных объектов`, callback_data:'location'}]
        ]
    })
};

var locationButtons = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        inline_keyboard: 
        [
            [{text: `Ледовый дворец "Рассвет"`, callback_data:'1'}],
            [{text: `Ледовая Арена "Платинум Арена Красноясрк"`, callback_data:'2'}],
            [{text: `Комплекс "Академия биатлона"`, callback_data:'3'}],
            [{text: `Комплекс "Арена-Север"`, callback_data:'4'}],
            [{text: `Стадион им Ленинского комсомола`, callback_data:'5'}],
            [{text: `Ледовый дворец "Кристалл Арена"`, callback_data:'6'}],
            [{text: `Комплекс "Академия зимних видов спорта"`, callback_data:'7'}],
            [{text: `Крытый каток "Первомайский"`, callback_data:'8'}],
            [{text: `Фанпарк "Бобровый Лог"`, callback_data:'9'}],
            [{text: `Дворец спорта им. Ярыгина`, callback_data:'10'}],
            [{text: `Стадион "Енисей"`, callback_data:'11'}]
        ]
    })
};

var calendarButtons = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        inline_keyboard: 
        [ 
            [{text: `2`, callback_data:'02.03.2019'},{text: `3`, callback_data:'03.03.2019'},{text: `4`, callback_data:'04.03.2019'}],

            [{text: `5`, callback_data:'05.03.2019'},{text: `6`, callback_data:'06.03.2019'},{text: `7`, callback_data:'07.03.2019'}],

            [{text: `8`, callback_data:'08.03.2019'},{text: `9`, callback_data:'09.03.2019'},{text: `10`, callback_data:'10.03.2019'}],

            [{text: `11`, callback_data:'11.03.2019'},{text: `12`, callback_data:'12.03.2019'}]
        ]
    })
};

var disciplinesButtons = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        inline_keyboard: 
        [ 
            [{text: `Биатлон`, callback_data:`20`}, {text: `Сноуборд`, callback_data: `21`}],
            [{text: `Лыжные гонки`, callback_data:`22`}, {text: `Кёрлинг`, callback_data: `23`}],
            [{text: `Шорт-трек`, callback_data:`24`}, {text: `Фигурное катание`, callback_data: `25`}],
            [{text: `Хоккей`, callback_data:`26`}, {text: `Горные лыжи`, callback_data: `27`}],
            [{text: `Фристайл`, callback_data:`28`}, {text: `Хоккей с мячом`, callback_data: `29`}],
            [{text: `Спорт. ориентирование`, callback_data:`30`}]            
        ]
    })
};


module.exports = {
    startButtons: startButtons,
    menuButtons: menuButtons,
    locationButtons: locationButtons,
    calendarButtons: calendarButtons
};