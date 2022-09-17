import Event from '../Structures/Event/Event'
import { client } from '../index'

export default new Event("interactionCreate", false, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);
	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: '에러가 걸렸습니다.', ephemeral: true });
	}
}, false)	