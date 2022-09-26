import Command from "../Structures/Command/Command";
import UserManager from '../Database/DAO/User'
import { SlashCommandBuilder } from "discord.js";

export default new Command(
  new SlashCommandBuilder()
    .setName("register")
    .setDescription("Registers yourself to this bot"),

  async (interaction) => {
    if (await UserManager.userExist(interaction.user.id)) {
      await interaction.reply('yuh already 가입됨')
      return
  }

  await interaction.reply('가입 시퀀스 시작')
  let filter = (m: any) => m.author.id === interaction.user.id;
  const collector = interaction.channel.createMessageCollector({filter, max: 1, time: 15000});

  collector.on('collect', async res => {

      await UserManager.registerUserData({_id: interaction.user.id, name: res})
      // @ts-ignore
      await interaction.channel.send('유저 가입 완료');
      collector.stop();

  });
  },
  false
);