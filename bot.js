require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "mod-me";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!!`);
});

client.on("messageDelete", (msg) => {
  msg.channel.send("Stop deleting messages");
});

client.on("message", (msg) => {
  if (msg.content === "Play dice") {
    msg.react("🎲");
  }

  if (msg.content === "!mod-me") {
    // msg.channel.send("Not tagged");
    // msg.reply("Pong!");
    modUser(msg.member);
  }
});

function modUser(member) {
  member.roles.add("801358833460707358");
}

client.login(process.env.BOT_TOKEN);
