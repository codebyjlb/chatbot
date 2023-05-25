const MessengerBot = require('messenger-bot');

const bot = new MessengerBot({
  token: 'process.env.PAGE_ACCESS_TOKEN',
  verify: 'process.env.APP_SECRET',
  app_secret: 'Yprocess.env.APP_SECRET'
});

bot.on('message', (userId, message) => {
  // Handle incoming messages
  console.log(`Received message from user ${userId}: ${message.text}`);
});

bot.on('postback', (userId, postback) => {
  // Handle postback events
  console.log(`Received postback from user ${userId}: ${postback.payload}`);
});

bot.start();
