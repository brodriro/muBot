import { Message } from 'discord.js'

module.exports = {
  description: 'Mu content',
  run: async (message: Message<boolean>) => {
    const args : string = message.content.split(' ').slice(1).join(' ');

    if(args.length < 1) return message.reply('Comando invalido');

    let response = ''
    if(args.includes('panda')) response = 'Panda o PANDAWAN es un offero legendario, solo tienes que darle un pj lleno de items y joyas para que lo queme todo y desinstale el juego';

    if(args.includes('akus')) response = 'Akus.. No lo llames para activar en bosses porque se pone a gritar como loca';
    if(args.includes('toguro')) response = 'Toguro o Treguaguro para los amigos, le gusta bossear.. siempre esta disponible cuando puede, grita como loca por el TP, se desconecta y dice que todos somos una mierda'

    message.reply(response);
  }
}
