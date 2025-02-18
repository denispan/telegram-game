const bot = require('./config/bot');
const { COMMANDS } = require('./constants');
const {
    handleStart,
    handleInfo,
    handleGame,
    handleWeather,
    handleLocation,
    handleGameAnswer
} = require('./controllers/messageController');

const start = () => {
    bot.setMyCommands(COMMANDS);

    bot.on('message', async (msg) => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            return handleStart(bot, chatId);
        }

        if (text === '/info') {
            return handleInfo(bot, chatId, msg);
        }

        if (text === '/game') {
            return handleGame(bot, chatId);
        }

        if (text === '/weather') {
            return handleWeather(bot, chatId);
        }

        if (msg.location) {
            return handleLocation(bot, chatId, msg.location);
        }

        return bot.sendMessage(chatId, 'Я Вас не понимаю');
    });

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        if (data === '/game') {
            return handleGame(bot, chatId);
        }

        if (data === '/info') {
            return handleInfo(bot, chatId, msg);
        }

        if (data === '/weather') {
            return handleWeather(bot, chatId);
        }

        if (data === '/again') {
            return handleGame(bot, chatId);
        }

        return handleGameAnswer(bot, chatId, data);
    });
};

start();

