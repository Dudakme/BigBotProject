import CommandManager from '../Structures/Command/CommandManager'
import Hello from './hello'
import Register from './register'
import info from './info'
import bet from './bet'

export default new CommandManager([
    Hello,
    Register,
    info,
    bet
])