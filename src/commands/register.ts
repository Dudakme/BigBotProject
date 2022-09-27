import Command from "../Structures/Command/Command";
import UserManager from "../Database/DAO/User";
import { SlashCommandBuilder } from "discord.js";

export default new Command(
  new SlashCommandBuilder()
    .setName("register")
    .setDescription("Registers yourself to this bot"),

  async (interaction) => {
    const { channel, user } = interaction;

    if (!channel) return;

    if (await UserManager.userExist(user.id) > 0) {
      await interaction.reply("yuh already 가입됨");
      return;
    }

    await interaction.reply({ content: "가입 됨"});

    await UserManager.registerUserData({
      _id: user.id,
      job: "null",
    });
  },
  false
);
