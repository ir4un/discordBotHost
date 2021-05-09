module.exports = {
	name: 'nice',
	description: 'A command that provide the user additional applause after something amazing had happened',
	execute(message) {
		message.channel.send(`Hahahaa, I agree with what ${message.author} said.`);
	},
};