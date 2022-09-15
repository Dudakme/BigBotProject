import { ClientEvents } from 'discord.js'
import Event from '../Structures/Event'

const EventName: string = "ready"

export default new Event("ready", true, i => {
    console.clear()
    console.log("ready");
}, false)

