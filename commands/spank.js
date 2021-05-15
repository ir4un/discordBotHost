module.exports = {
	name: 'spank',
	description: 'A command that will allow the user to choose another user that will be spanked.',
	execute(message, args) {
		executeCommand(message, args);
	},
};

// const fetch = require('node-fetch');
const { retrieveResponse, retrieveGif } = require('./responses');
async function executeCommand(message, args) {

	if (args.length > 1) {
		message.channel.send('Please select only 1 user for me to spank! I cannot spank multiple people at once.....unless?');
		return;
	}
	else if (args.length < 1) {
		message.channel.send('Please select at least 1 user for me to spank! Or maybe you want me to spank myself :3');
		return;
	}
	else if (!args[0].startsWith('<@') && !args[0].endsWith('>')) {
		message.channel.send('Please make sure you are mentioning someone correct so i can spank them :p');
		return;
	}
	message.channel.send(retrieveResponse(args[0]));
	message.channel.send(retrieveGif());
	// message.content = '}spank anime spank';
	// const spliter = message.content.split(' ');

	// if(spliter[0] == '}spank') {
	//	let keyword = 'anime+spank';
	//	keyword = spliter.slice(1, spliter.length).join('-');
	//	const url = `https://g.tenor.com/v1/search?q=${keyword}&key=${process.env.TENORKEY}&limit=10&contentfilter=off&media_filter=minimal`;
	//	const response = await fetch(url);
	//	const json = await response.json();
	//	const index = Math.floor(Math.random() * json.results.length);
	//	message.channel.send(json.results[index].url);
	//	message.channel.send(index + url);
	//	message.channel.send(keyword);
	// message.channel.send(message.content);
	// }
}

