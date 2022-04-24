# TeleShellBot
A simple Telegram Bot to run shell commands remotely, so that you can maintain your server from mobile phones!
![demo](https://cdn.jsdelivr.net/gh/marknote/TeleShellBot/screens/demo.gif)

## Install
Download or clone this repo, then
```
npm install
```
## Config
- Follow [Telegram instructions](https://telegram.org/blog/bot-revolution) to create a bot, and you will get bot token.
- [Find you user ID](https://medium.com/@tabul8tor/how-to-find-your-telegram-user-id-6878d54acafa)
- Then put your telegram user ID and bot token in `config.js`:
```javascript
module.exports = {
    config:function(){
        return (
            {
                adminUsers:[ADMIN_ID], //admin users' telegram id, should be numbers
                botToken: 'YOUR_BOT_TOEKN', // bot token

            }
        );
    }
};
```
## Run
```
npm run start
```
or 
```
node index.js
```

That is it!
