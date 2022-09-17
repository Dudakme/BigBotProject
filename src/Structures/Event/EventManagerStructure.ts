import Event from "./Event";
import { Client, ClientEvents } from "discord.js";

export default class EventManager {
  constructor(private eventArray: Array<Event<any>>) {}

  public init(client: Client) {
    this.eventArray.forEach((e) => {
      e.once
        ? client.once(e.name, i => {
            e.execute(i);
          })
        : client.on(e.name, (i) => {
            e.execute(i);
          });
    });
  }
}
