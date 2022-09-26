import mongoose from 'mongoose'

export default class Database {

    constructor(private url: string, private name: string) {

    }

    public async init() {
        await mongoose.connect(`${this.url}/${this.name}`, () => {
            console.log('connected to db!')
        })
    }
}