module.exports = {
	name: 'ping',
	description: 'A bot command that returns ping value retrieved by the bot',
	execute(message, argument, client, Discord) {
		message.channel.send('Pog').then(resultMessage => {
			resultMessage.edit('I have retrieved your requested ping value, master.');
			const pingEmbed = new Discord.MessageEmbed()
				.setColor('#d10e00')
				.setThumbnail('https://media.giphy.com/media/VBc6l3CqQonqo/giphy.gif')
				.setDescription(`${client.ws.ping}ms`);
			try{
				message.channel.send(pingEmbed);
			}
			catch {
				message.reply(`I'm terribly sorry master ${message.author.username}, but something is preventing me from fulfiling your request.`);
			}
		});
	},
};