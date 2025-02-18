module.exports = {
  startOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{text: 'Познакомиться', callback_data: '/info'}, {text: 'Поиграть', callback_data: '/game'}, {text: 'Узнать погоду', callback_data: '/weather'},]
      ]
    })
  },

  gameOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{text: '1', callback_data: '1'}, {text: '2', callback_data: '2'}, {text: '3', callback_data: '3'},]
      ]
    })
  },

  againOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{text: 'Играть заново', callback_data: '/again'}],
      ]
    })
  }
};
