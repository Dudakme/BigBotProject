import { Client, GatewayIntentBits } from 'discord.js'
import events from './events'

import { token } from './config.json'

const client: Client = new Client({ intents: [GatewayIntentBits.Guilds]})

events.init(client);

client.login(token)



