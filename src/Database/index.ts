import { databaseConfig } from '../JSON/database.json'
import Database from '../Structures/database'

export default new Database(databaseConfig.url, databaseConfig.name);