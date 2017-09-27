const config = require('./config').config();
const TeleBot = require('telebot');
const bot = new TeleBot(config.botToken);
const { spawn } = require('child_process');
const adminUsers = config.adminUsers;

bot.on('text', (msg) => {
    const id = msg.from.id;
    msg.reply.text('$:'+msg.text);
    if(adminUsers.indexOf(id) < 0){
        msg.reply.text('You are not admin!');
        return;
    }
    let words = msg.text.split(" ");
    let len = words.length;
    let args = [];
    if (len > 1 ){
        args = words.slice(1, len);
        
    } 
    console.log('args:'+args);

    const shell = spawn(words[0],args);
    
    shell.stdout.on('data', (data) => {
        msg.reply.text(`stdout:\n ${data}`);
    });
    
    shell.stderr.on('data', (data) => {
        msg.reply.text(`stderr: ${data}`);
    });
    
    shell.on('close', (code) => {
        msg.reply.text(`shell exited with code ${code}`);
    });

}
);

bot.start();