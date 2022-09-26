import { GatewayIntentBits } from 'discord.js'
import events from './events'
import commands from './commands'
import MyClient from './Structures/ExtendedClient'
import Database from './Database'

import { token } from './JSON/config.json'

export const client: MyClient = new MyClient({ intents: [GatewayIntentBits.Guilds]})

Database.init();
commands.init(client);
events.init(client);

client.login(token);



