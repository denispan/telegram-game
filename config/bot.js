require('dotenv').config();
const TelegramApi = require('node-telegram-bot-api');

const token = process.env.BOT_KEY;
const bot = new TelegramApi(token, {polling: true});

module.exports = bot;
