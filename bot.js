const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("571295735027466252")
setInterval(function() {
channel.send(`هنا كلام ال سبام`);
}, 30)
})

client.login("NTExMjI3ODQ5NjUxNTE5NDg5.XO4qaQ._C3eAyj7HLZBwnfZDacNIdbBdZ4");
