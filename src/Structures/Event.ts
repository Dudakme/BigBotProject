import { Client, ClientEvents } from "discord.js";



export default class Event<T extends keyof ClientEvents> {
  /** make a new event
   * @param name - the name of the event
   * @param once - choosing rather the client needs to do once or on
   * @param toCallback - What happens what the event is on
   * @param toSave - If it should be saved to the database
   */

  constructor(
    public name: T,
    public once: Boolean,
    private toCallback: (...args: ClientEvents[T]) => void,
    private toSave: Boolean
  ) {}

  public execute(...args: ClientEvents[T]): void {
    this.toCallback(...args);
    this.toSave ? console.log("to save") : console.log("not to save");
  }
}
