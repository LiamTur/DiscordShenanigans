const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('become_political')
		.setDescription('Replies with politics!'),
	async execute(interaction) {
		await interaction.reply('SVERIGE VÄNNER!');
	},
};