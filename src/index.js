/* require block */
const Discord = require('discord.js');
const Settings = require('./settings.json');

const bot = new Discord.Client();

bot.login(Settings.token);
