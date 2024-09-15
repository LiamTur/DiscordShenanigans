const { SlashCommandBuilder } = require('discord.js');

let inputs = [];

module.exports = {
    data: [
        new SlashCommandBuilder()
            .setName('addinput')
            .setDescription('Adds an input to the list.')
            .addStringOption(option =>
                option.setName('input')
                    .setDescription('The input to add.')
                    .setRequired(true)),
        new SlashCommandBuilder()
            .setName('chooseinput')
            .setDescription('Chooses a random input from the list.')
    ],
    async execute(interaction) {
        if (interaction.commandName === 'addinput') {
            const input = interaction.options.getString('input', true);
            inputs.push(input);
            await interaction.reply(`Input \`${input}\` added!`);
        } else if (interaction.commandName === 'chooseinput') {
            if (inputs.length === 0) {
                await interaction.reply('No inputs available to choose from.');
            } else {
                const randomInput = inputs[Math.floor(Math.random() * inputs.length)];
                await interaction.reply(`Randomly chosen input: \`${randomInput}\``);
            }
        }
    },
};