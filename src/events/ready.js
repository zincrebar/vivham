const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        client.user.setActivity('play toys', { type: ActivityType.Custom });
        client.user.setStatus('idle');
		console.log(`it's time to pick flowers and have fun ${client.user.tag}`);
	},
};
