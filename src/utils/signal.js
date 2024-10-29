export class Signal{
    listeners = []

    addListener = (listener) => {
        this.listeners.push(listener)
    }

    emmit = (info={}) =>{
        this.listeners.map(listener=>{
            listener(info)
        })
    }
}