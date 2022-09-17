import EventManagerStructure from '../Structures/Event/EventManagerStructure'

import ReadyEvent from './Ready'
import Commands from './Command'

export default new EventManagerStructure([
    ReadyEvent, 
    Commands,
])