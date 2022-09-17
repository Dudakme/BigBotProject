import Event from '../Structures/Event/Event'


export default new Event("ready", true, i => {
    console.clear()
    console.log("ready");
}, false)



