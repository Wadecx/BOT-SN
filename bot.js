const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.on('message',(message) =>{

    if(message.content == '>ping') {
        message.channel.sendMessage('pong !');
    }

    if(message.content == '>devoirs') {
        message.channel.sendMessage('Matière : ');
        message.channel.sendMessage('bot en construction les gars attendez un peu !');
    }

    if(message.content == '>aide') {
    message.channel.sendMessage('Voici le guide des commandes !');
    message.channel.sendMessage('>ping / pong');
    message.channel.sendMessage('>devoirs / affiche les devoirs !');
    message.channel.sendMessage('>aide / affiche le guide d aide');
    message.channel.sendMessage('>q / te fait une briève histoire de qui tu es !');
    }

    if(message.content == '>q') {
        message.channel.sendMessage('Mhhh Tu es en SN n es-ce pas ?');
        message.channel.sendMessage('c était pas dure a devine.');
        message.channel.sendMessage('Tu es un élève brilliant es qui cherche a avoir son diplome !');
        message.channel.sendMessage('Mais pour cela il va te falloir du travail et de l apprentissage.');
        message.channel.sendMessage('Alors Tyron BOT te souhaite un bon courage es que toute notre classe es ce foutu BAC !');
        message.reply('Bonne chance mon ami !');

    }
    


});


bot.login('MzYzNzY0ODQyODMxNjc1NDEz.DtHuyw.9ljpMORqCfMAMo5vWS7Usnx7_FY');
