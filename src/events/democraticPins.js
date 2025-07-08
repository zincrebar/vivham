const { Events, EmbedBuilder, ChannelManager } = require('discord.js');

module.exports = {
    name: Events.MessageReactionAdd,
    async execute(reaction, user, details) {
        if (!reaction.message.guildId) return;

        const pinChannel = ChannelManager.fetch('1384783985871294535')
        console.log(pinChannel)
    },
};
