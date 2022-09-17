import Command from "../Structures/Command/Command";
import { SlashCommandBuilder } from "discord.js";

export default new Command(
  new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Replies with hello!"),

  async (interaction) => {
    await interaction.reply("Pong!");
  },
  false
);