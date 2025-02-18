# [Проект «Телеграм-бот»](https://t.me/denpan_bot)

[t.me/denpan_bot](https://t.me/denpan_bot) </br></br>
<img width="200" alt="screenshot" src="https://github.com/user-attachments/assets/249d0b1a-a708-41c4-b561-28f7a082760d" /> </br></br>

<strong>Pet-проект - телеграм бот на JS</strong></br>
Может сообщить ваш ник в телеграм, с ним можно поиграть в игру "Угадай число" и узнать погоду по вашей локации</br>

### Основные команды 
<i>основные</b> команды:</i><br/><br/>
<b>/start</b> - начать работу<br/>
<b>/game</b> - игра отгадай одно из трех чисел<br/>
<b>/weather</b> - узнать текущую погоду, отправив локацию<br/>
<b>/info</b> - познакомиться

### Ключевые особенности

- Многофункциональный бот с поддержкой различных команд
- Интерактивная игра с числами
- Получение погоды по геолокации пользователя
- Обработка inline-кнопок и callback-запросов
- Модульная архитектура для легкого расширения функционала

### Используемые технологии

- **Node.js** - среда выполнения JavaScript
- **node-telegram-bot-api** - официальная библиотека для работы с Telegram Bot API
- **Axios** - HTTP-клиент для работы с внешними API
- **OpenWeatherMap API** - сервис для получения данных о погоде


### [Немного скриншотов](https://t.me/denpan_bot)
| Процесс игры | Процесс игры |                                                          Процесс игры                                                          |
|:---------------:|:--------------:|:------------------------------------------------------------------------------------------------------------------------------:|
| <img width="300" alt="Desktop version" src="https://github.com/user-attachments/assets/1f409aad-b7a2-4ceb-9bf8-ad3d99a40abf" /> | <img width="300" alt="Tablet version" src="https://github.com/user-attachments/assets/249d0b1a-a708-41c4-b561-28f7a082760d" /> | <img width="300" alt="Tablet version" src="https://github.com/user-attachments/assets/249d0b1a-a708-41c4-b561-28f7a082760d" /> |


### Структура проекта

```
├── config/          # Конфигурация бота
├── controllers/     # Обработчики сообщений
├── services/        # Бизнес-логика
├── utils/           # Вспомогательные функции
└── constants.js     # Константы и команды
```
