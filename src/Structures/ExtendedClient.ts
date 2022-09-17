import { Client, Collection } from 'discord.js'
import Command from './Command/Command'

export default class MyClient extends Client<true> {
    public commands = new Collection<string, Command>()
}