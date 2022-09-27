import Command from "../Structures/Command/Command";
import { SlashCommandBuilder } from "discord.js";
import UserManager from "../Database/DAO/User";

export default new Command(
  new SlashCommandBuilder()
    .setName("bet")
    .setDescription("bet money")
    .addNumberOption(option => option.setName('amount').setDescription('this')),

  async (interaction) => {

    if (!interaction.isChatInputCommand()) return;

    const betAmount = interaction.options.getNumber('amount')
    const userData = await UserManager.getUser(interaction.user.id)
    let updatingMoney: number = 0;

    if (!userData) return;
    if (!betAmount) return;

    if (userData.Coins < betAmount) return;

    updatingMoney = userData.Coins - betAmount
    
    const a = Math.floor(Math.random() * 8);
    const b = Math.floor(Math.random() * 8);
    const c = Math.floor(Math.random() * 8);

    await interaction.reply(`${a} ${b} ${c}`);
    

    if (a===b && b===c) {
        updatingMoney = updatingMoney + betAmount * 4
        UserManager.setUserMoney(interaction.user.id, betAmount * 1.1)
    } else if (a===b || b===c) {
        updatingMoney = updatingMoney + betAmount * 1.75
    }

    UserManager.setUserMoney(interaction.user.id, updatingMoney)

  },
  false
);