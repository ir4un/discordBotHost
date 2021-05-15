const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const { prefix } = require('./config.json');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Ready!');
	client.user.setActivity('With Myself', { type: 'PLAYING' })
		.then (presence => console.log(`Activity set to ${presence.activities[0]}`))
		.catch(console.error);
});

client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, client, Discord);
		// console.log(args);
	}
	catch (error) {
		console.error(error);
		message.reply('I am sorry master! I cant seem to understand what you are tryna say :^(');
	}
	// ...
});

client.login(process.env.token);