module.exports = {
	name: 'template',
	description: 'A command that greets the user.',
	execute(message) {
		message.channel.send('Nothing to see here *whistles');
	},
};