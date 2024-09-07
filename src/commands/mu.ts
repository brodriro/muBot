import { Message } from 'discord.js'

module.exports = {
  description: 'Mu content',
  run: async (message: Message<boolean>) => {
    const args : string = message.content.split(' ').slice(1).join(' ');

    if(args.length < 1) return message.reply('Comando invalido');

    let response = ''
    if(args.includes('panda')) response = '';

    if(args.includes('akus')) response = '';
    if(args.includes('toguro')) response = ''

    message.reply(response);
  }
}
