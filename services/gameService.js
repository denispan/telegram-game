const chats = {};

const generateNumber = () => Math.floor(Math.random() * 3 + 1);

const startNewGame = (chatId) => {
    chats[chatId] = generateNumber();
    return chats[chatId];
};

const checkAnswer = (chatId, answer) => {
    const correctNumber = chats[chatId];
    return {
        isCorrect: +answer === +correctNumber,
        correctNumber
    };
};

module.exports = {
    startNewGame,
    checkAnswer
};
