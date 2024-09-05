import { Module } from '@nestjs/common';
import { Client, Events, PartialMessage } from 'discord.js'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {

  constructor(
    //client: new Client({ intents : 3276799}),
  ){

    const client = new Client({ intents : 53608447});


    client.on(Events.MessageCreate, async (message) => {
      if(message.author.bot) return;
      if(!message.content.startsWith('!')) return;

      console.log(`Mensaje: ${message.content}`)
      const args = message.content.slice(1).split(' ')[0];

      console.log(`Args: ${args}`)
      try {
        
        const command = require(`./commands/${args}`);
        command.run(message);

      } catch (error){
        console.error(`Ha ocurrido un error al utilizar el comando ${args}`, error);
      }
    });

    client.on(Events.ClientReady, async() =>{
      console.log(`Logged in as ${client.user.tag}`);
    });

    client.login(process.env.TOKEN)

  }

}
