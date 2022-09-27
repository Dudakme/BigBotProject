import CommandManager from '../Structures/Command/CommandManager'
import Hello from './hello'
import Register from './register'
import info from './info'

export default new CommandManager([
    Hello,
    Register,
    info
])