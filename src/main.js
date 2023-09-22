import {Client,GatewayIntentBits, Partials} from "discord.js"
import config from "./config.js"

const client = new Client({
    intents:[Object.keys(GatewayIntentBits)],
    partials:[Object.keys(Partials)]
})

client.on('messageCreate',async message => {
    if(message.content=="/Saludo"){
        message.reply({content:"Hola, Como estas?"})
    }
})

client.login(config.token).then(()=>{
    console.log("Bot online")
})