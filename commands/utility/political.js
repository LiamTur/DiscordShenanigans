const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('become_political')
		.setDescription('Replies with politics!'),
	async execute(interaction) {
		await interaction.reply('SVERIGE VÄNNER!');
	},
};