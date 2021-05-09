module.exports = {
	name: 'hello',
	description: 'A command that greets the user.',
	execute(message) {
		message.channel.send('Hello there! I am you Humble Text Slave, at your service.\r\nI will gladly accept any of your request no matter how lewd it is.');
	},
};