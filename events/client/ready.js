const figlet = require('figlet');
const chalk = require('chalk');

module.exports = async (client) => {
  figlet(client.user.tag, function(err, data) {
    if (err) {
        console.log('TEC | Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.red.bold(data));
  });

  let guilds = client.guilds.cache.size;
  let users = client.users.cache.size;
  let channels = client.channels.cache.size;

  const activities = [
      `${client.prefix}help | TEAM TEC `,
      `${client.prefix}play <input> | TEAM TEC `,
      `${client.prefix}filterlist | TEAM TEC `,
  ]

  setInterval(() => {
      client.user.setActivity(`${activities[Math.floor(Math.random() * activities.length)]}`, { type: 'WATCHING' });
  }, 15000)
}
