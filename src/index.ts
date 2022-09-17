import { GatewayIntentBits } from 'discord.js'
import events from './events'
import commands from './commands'
import MyClient from './Structures/ExtendedClient'

import { token } from './config.json'

export const client: MyClient = new MyClient({ intents: [GatewayIntentBits.Guilds]})

commands.init(client);
events.init(client);

client.login(token)



