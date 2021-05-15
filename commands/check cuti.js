module.exports = {
	name: 'check',
	description: 'A command that tells the user if tomorrow is a holiday or not.',
	execute(message, args) {
		executeCommand(message, args);
	},
};

async function executeCommand(message, args) {
	if (args.length > 1) {
		message.channel.send('I have no idea what to do based on what you just told me. >:^(');
		return;
	}
	else if (args.length < 1) {
		message.channel.send('Can you please tell me again what exactly you want me to check? Your butt? :^l');
		return;
	}
	else if (args[0] !== 'cuti') {
		message.channel.send('What you just told me was a bit unclear, can you please repeat it again?');
		return;
	}

	console.log(args[0]);
	let cutiStatus;
	let day;
	switch (new Date().getDay()) {
	case 0:
		day = 'Sunday';
		cutiStatus = 'tak cuti';
		break;
	case 1:
		day = 'Monday';
		cutiStatus = 'tak cuti';
		break;
	case 2:
		day = 'Tuesday';
		cutiStatus = 'tak cuti';
		break;
	case 3:
		day = 'Wednesday';
		cutiStatus = 'tak cuti';
		break;
	case 4:
		day = 'Thursday';
		cutiStatus = 'tak cuti';
		break;
	case 5:
		day = 'Friday';
		cutiStatus = 'cuti';
		break;
	case 6:
		day = 'Saturday';
		cutiStatus = 'cuti';
	}
	message.channel.send(`According to my knowledge and observation, today is ${day} so that means esok ${cutiStatus}!`);
}
