import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";

import { clientId, guildId, token } from "../../config.json";

import Command from "./Command";
import MyClient from "../ExtendedClient";

export default class CommadManager {
  constructor(private commandsArray: Array<Command>) {}

  public init(client: MyClient) {
    const commands: any[] = [];
    const rest = new REST({ version: "10" }).setToken(token);

    this.commandsArray.forEach((e) => {
      client.commands.set(e.data.name, e);
      commands.push(e.data.toJSON());
    });

    rest
      .put(Routes.applicationGuildCommands(clientId, guildId), {
        body: commands,
      })
      .then(() =>
        console.log(
          `Successfully registered application commands.`
        )
      )
      .catch(console.error);
  }
}
