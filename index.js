const { exec } = require("child_process");
const chalk = require("chalk");
const fs = require("fs");
global.loading = require("./utils/log.js");

let configJson;
const sign = "(›^-^)›";
const fbstate = "appstate.json";

try {
  configJson = require("./config.json");
} catch (error) {
  console.error("Error loading config.json:", error);
  process.exit(1);
}

const delayedLog = async (message) => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (const char of message) {
    process.stdout.write(char);
    await delay(50);
  }

  console.log();
};

const showMessage = async () => {
  const message =
    chalk.yellow(" ") +
    `The "removeSt" property is set true in the config.json. Therefore, the Appstate was cleared effortlessly! You can now place a new one in the same directory.`;

  await delayedLog(message);
};

if (configJson.removeSt) {
  fs.writeFileSync(fbstate, sign, { encoding: "utf8", flag: "w" });
  showMessage();
  configJson.removeSt = false;
  fs.writeFileSync("./config.json", JSON.stringify(configJson, null, 2), "utf8");
  setTimeout(() => {
    process.exit(0);
  }, 10000);
  return;
}

// ---------------------------
// Auto-update logic removed
// ---------------------------

const path = require("path");
const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());

// Serve all static files from the whole project
app.use(express.static(path.join(__dirname, "includes/cover")));

// Route to serve config.json
app.get("/themes", (req, res) => {
  res.sendFile(path.join(__dirname, "includes/cover/html.json"));
});

// Serve index.html from includes/cover
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "includes/cover/index.html"));
});

app.listen(2024, () => {
  global.loading.log(`Bot is running on port: 2024`, "SYSTEM");
});

// __@YanMaglinte was Here__ //
// ----------------------------//
