const MessengerBot = require('messenger-bot');

const bot = new MessengerBot({
  token: 'YOUR_PAGE_ACCESS_TOKEN',
  verify: 'YOUR_APP_SECRET',
  app_secret: 'YOUR_APP_SECRET'
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
