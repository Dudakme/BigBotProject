import { SlashCommandBuilder, CommandInteractionOption } from 'discord.js'

import Command from '../Structures/Command/Command';
import UserManager from '../Database/DAO/User'

export default new Command(
  new SlashCommandBuilder()
    .setName('info')
    .setDescription('Replies with hello!')
    .addUserOption(option => option.setName('target').setDescription('Target of who')),

  async (interaction) => {
    let user: null | CommandInteractionOption['user'] = interaction.options.getUser('target');
    
    if (!user) user = interaction.user;

    const userData = await UserManager.getUser(user.id);

    if (!userData) return;

    interaction.reply(`
    id: ${userData._id}
    job: ${userData.job}
    Coins: ${userData.Coins}
    inventory: ${userData.inventory}
    Hunger: ${userData.Hunger}
    MP: ${userData.MP}
    Level: ${userData.MP}
    `)
  },
  false
);