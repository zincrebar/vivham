const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('Roll the dice!')
        .addNumberOption(option =>
            option.setName('min')
                .setDescription('The minimum number it’ll roll from (default: 0)'))
        .addNumberOption(option =>
            option.setName('max')
                .setDescription('The maximum number it’ll roll to (default: 20)')),
	async execute(interaction) {
        const min = interaction.options.getNumber('min') ?? 0;
        const max = interaction.options.getNumber('max') ?? 20;

        var num = Math.random() * (max - min) + min;

		await interaction.reply(`${Math.round(num)}`);
	},
};
