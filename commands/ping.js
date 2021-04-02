module.exports = {
  name: "ping",
  category: "info",
  description: "Get bot ping",
  usage: "ping",
  };

run: async function (client, message, args) {
    message.channel.send(`**Pong** ${client.ws.ping}`);
  }
