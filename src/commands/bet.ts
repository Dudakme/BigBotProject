import Command from "../Structures/Command/Command";
import { SlashCommandBuilder } from "discord.js";
import UserManager from "../Database/DAO/User";
import { EmbedBuilder } from 'discord.js';


const thisArray = [
  ":one:",
  ":one:",
  ":two:",
  ":two:",
  ":two:",
  ":two:",
  ":watermelon:",
  ":watermelon:",
  ":watermelon:",
  ":heart:",
  ":heart:",
  ":crown:",
];

const makeResultEmbed = (WinorLose: Boolean, before: number, after: number ) => {
    const title = WinorLose ? 'Won' : 'lost';
    return new EmbedBuilder()
    .setColor(0x0099FF)
    .setAuthor({ name: 'Result', iconURL: 'https://i.imgur.com/AfFp7pu.png' })
    .setTitle(title)
    .setDescription(`The user have ${title} in the slot machine! \n \` ${before} \` -> \` ${after} \``)
}

const getRankByEmoji = (e: string): number => {
  switch (e) {
    case ":one:":
      return 1;
      break;
    case ":two:":
      return 2;
      break;
    case ":watermelon:":
      return 3;
      break;
    case ":heart:":
      return 4;
      break;
    case ":crown:":
      return 5;
      break;
    default:
      return 0;
  }
}

export default new Command(
  new SlashCommandBuilder()
    .setName("bet")
    .setDescription("bet money")
    .addNumberOption((option) =>
      option.setName("amount").setDescription("this")
    ),

  async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const betAmount = interaction.options.getNumber("amount");
    const userData = await UserManager.getUser(interaction.user.id);
    let isWon = false;
    let updatingMoney: number = 0;

    if (!userData) return;
    if (!betAmount) return;

    if (userData.Coins < betAmount) return;

    updatingMoney = userData.Coins - betAmount;

    const a = thisArray[Math.floor(Math.random() * thisArray.length)];
    const b = thisArray[Math.floor(Math.random() * thisArray.length)];
    const c = thisArray[Math.floor(Math.random() * thisArray.length)];


    if (a === b && b === c) {
      const Amount = getRankByEmoji(a) * 2;
      updatingMoney += betAmount * Amount;

      isWon = true;
    } else if (a === b || b === c || a === c) {
      updatingMoney += betAmount * 2.25;
      isWon = true;
    }

    UserManager.setUserMoney(interaction.user.id, updatingMoney);
    
    interaction.reply({ content: `**${a} ${b} ${c}**`, embeds: [makeResultEmbed(isWon, userData.Coins, updatingMoney)]})
  },
  false
);
