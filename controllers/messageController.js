const { getWeatherByLocation } = require('../services/weatherService');
const { startNewGame, checkAnswer } = require('../services/gameService');
const { gameOptions, againOptions, startOptions } = require('../options');

const handleStart = async (bot, chatId) => {
    await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/22c/b26/22cb267f-a2ab-41e4-8360-fe35ac048c3b/192/1.webp');
    return bot.sendMessage(chatId, 'Чатбот приветствует Вас. Выберете в меню интересующий пункт.', startOptions);
};

const handleInfo = async (bot, chatId, msg) => {
    await bot.sendMessage(chatId, `Меня зовут Денис, а Вас ${msg.from.first_name}`);
};

const handleGame = async (bot, chatId) => {
    await bot.sendMessage(chatId, `Сейчас я загадаю число от 1 до 3, а Вам нужно будет его отгадать 😏`);
    startNewGame(chatId);
    await bot.sendMessage(chatId, 'Отгадывайте!', gameOptions);
};

const handleWeather = async (bot, chatId) => {
    await bot.sendMessage(chatId, `Если хотите узнать погоду у себя в регионе, пришлите своё местоположение(нажать на скрепку и выбрав пункт Location)`);
};

const handleLocation = async (bot, chatId, location) => {
    try {
        const weather = await getWeatherByLocation(location.latitude, location.longitude);
        await bot.sendMessage(
            chatId, 
            `Сейчас в ${weather.cityName} ${weather.temperature}°, скорость ветра ${weather.windSpeed} м/c, давление ${weather.pressure} мм рт.ст.`
        );
    } catch (err) {
        await bot.sendMessage(chatId, `Не могу загрузить данные`);
    }
};

const handleGameAnswer = async (bot, chatId, answer) => {
    const result = checkAnswer(chatId, answer);
    await bot.sendMessage(chatId, `Вы выбрали число ${answer}`);
    
    if (result.isCorrect) {
        return bot.sendMessage(chatId, `Правильно! Это число ${result.correctNumber}. Вы случайно не Коперфильд?🤩`, againOptions);
    } else {
        return bot.sendMessage(chatId, `Почти угадали 😕 Бот загадал число ${result.correctNumber}. В следующий раз должно повезти!`, againOptions);
    }
};

module.exports = {
    handleStart,
    handleInfo,
    handleGame,
    handleWeather,
    handleLocation,
    handleGameAnswer
};
