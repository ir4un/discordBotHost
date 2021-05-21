module.exports = {
	name: 'help',
	description: 'A command that provides the user with the commands for the Humble Text Slave Bot.',
	execute(message, args) {
		executeCommand(message, args);
	},
};

// const fetch = require('node-fetch');
async function executeCommand(message) {
	message.channel.send('I have personally sent you a list of commands you may use on me to satisfy your desires');
	const commandsList = [
		'}help - To request for a list of commands for me :3\n',
		'}hello - Say hello to me and i will say hi back :p \n',
		'}nice - I support you on what you nice on previously \n',
		'}check cuti - To see if tomorrow is holiday or nah \n',
		'}spank <@mention> - To spank someone with horny intent \n',
	];
	message.author.send('Good Day! Master! Here are the commands you may use on me: \n ' + commandsList.join(' '));
}
