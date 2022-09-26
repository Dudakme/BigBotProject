import { EmbedBuilder } from "discord.js";

const Succeeded = new EmbedBuilder()
  .setColor('#7DC698')
  .setTitle("Register Success!")
  .setDescription("You have succeeded to be a user of the bot.")
  .setTimestamp();

const Failed = new EmbedBuilder()
  .setColor('#EC8B48')
  .setTitle("Register Failed..")
  .setDescription("An error occured while executing register. Please check if you have \n - ")
  .setTimestamp();

export { Succeeded };
