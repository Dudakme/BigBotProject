import { Client, ClientEvents, CommandInteraction, SlashCommandBuilder } from "discord.js";



export default class Command {
  /** make a new event
   * @param data - Data in event
   * @param toCallback - What happens what the event is on
   * @param toSave - If it should be saved to the database
   */

  constructor(
    public data: SlashCommandBuilder | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">,
    private toCallback: (interaction: CommandInteraction) => void,
    private toSave: Boolean
  ) {}

  public execute(interaction: CommandInteraction): void {
    this.toCallback(interaction);
    // this.toSave ? console.log("to save") : console.log("not to save");
  }
}
