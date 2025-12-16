const chalk = require("chalk");
const con = require("./../config.json");

function getThemeColors() {
  const theme = con.DESIGN.Theme;
  let subcolor, main, error, secondary, tertiary, html;

  switch (theme.toLowerCase()) {
    case "blue":
      main = chalk.yellow;
      subcolor = chalk.hex("#4687f0");
      secondary = chalk.blueBright;
      tertiary = chalk.bold.hex("#3467eb");
      error = chalk.hex("#ff0000").bold;
      html = ["#1702CF", "#11019F", "#1401BF"];
      break;
    case "fiery":
      main = chalk.hex("#ffa500"); // orange
      subcolor = chalk.hex("#fc6f03");
      secondary = chalk.hex("#fff308");
      tertiary = chalk.bold.hex("#fc3205");
      error = chalk.red.bold;
      html = ["#CE2F16", "#fe8916", "#ff952a"];
      break;
    case "red":
      main = chalk.yellow;
      subcolor = chalk.red;
      secondary = chalk.hex("#ff0000");
      tertiary = chalk.bold.hex("#ff0000");
      error = chalk.red.bold;
      html = ["#ff0000", "#ff4747", "#ff0026"];
      break;
    case "aqua":
      main = chalk.hex("#8b9ff7");
      subcolor = chalk.hex("#4e6cf2");
      secondary = chalk.hex("#3056ff");
      tertiary = chalk.bold.hex("#0332ff");
      error = chalk.blueBright;
      html = ["#2e5fff", "#466deb", "#1BD4F5"];
      break;
    case "pink":
      main = chalk.magenta;
      subcolor = chalk.hex("#d94fff");
      secondary = chalk.hex("#6a00e3");
      tertiary = chalk.bold.hex("#6a00e3");
      error = chalk.magenta;
      html = ["#ab68ed", "#ea3ef0", "#c93ef0"];
      break;
    case "retro":
      main = chalk.orange;
      subcolor = chalk.hex("#ffce63");
      secondary = chalk.hex("#ffce63");
      tertiary = chalk.bold.hex("#3c09ab");
      error = chalk.magenta;
      html = ["#7d02bf", "#FF6F6F", "#E67701"];
      break;
    case "sunlight":
      main = chalk.hex("#f5e131");
      subcolor = chalk.hex("#ffe600");
      secondary = chalk.hex("#faf2ac");
      tertiary = chalk.bold.hex("#ffe600");
      error = chalk.hex("#f5e131");
      html = ["#ffae00", "#ffbf00", "#ffdd00"];
      break;
    case "teen":
      main = chalk.cyanBright;
      subcolor = chalk.hex("#9CFBEF");
      secondary = chalk.hex("#a1d5f7");
      tertiary = chalk.bold.hex("#ad0042");
      error = chalk.hex("#00a9c7");
      html = ["#29D5FB", "#9CFBEF", "#fa7f7f"];
      break;
    case "summer":
      main = chalk.yellowBright;
      subcolor = chalk.cyan;
      secondary = chalk.yellow;
      tertiary = chalk.bold.hex("#fff700");
      error = chalk.cyan;
      html = ["#f7f565", "#16FAE3", "#16D1FA"];
      break;
    case "flower":
      main = chalk.yellow;
      subcolor = chalk.greenBright;
      secondary = chalk.green;
      tertiary = chalk.bold.hex("#47ffbc");
      error = chalk.magenta;
      html = ["#16B6FA", "#FB7248", "#13FF9C"];
      break;
    case "ghost":
      main = chalk.blue;
      subcolor = chalk.cyan;
      secondary = chalk.blueBright;
      tertiary = chalk.bold.hex("#1390f0");
      error = chalk.cyan;
      html = ["#076889", "#0798C7", "#95d0de"];
      break;
    case "hacker":
      main = chalk.hex("#4be813");
      subcolor = chalk.hex("#0eed19");
      secondary = chalk.hex("#22f013");
      tertiary = chalk.bold.hex("#0eed19");
      error = chalk.hex("#4be813");
      html = ["#049504", "#0eed19", "#01D101"];
      break;
    case "purple":
      main = chalk.hex("#7a039e");
      subcolor = chalk.hex("#4687f0");
      secondary = chalk.hex("#6033f2");
      tertiary = chalk.bold.hex("#5109eb");
      error = chalk.hex("#7a039e");
      html = ["#380478", "#5800d4", "#4687f0"];
      break;
    case "rainbow":
      main = chalk.cyan;
      subcolor = chalk.magenta;
      secondary = chalk.red;
      tertiary = chalk.bold.magenta;
      error = chalk.hex("#ff8400");
      html = ["#E203B2", "#06DBF7", "#F70606"];
      break;
    case "orange":
      main = chalk.hex("#ff8400");
      subcolor = chalk.hex("#ffad08");
      secondary = chalk.hex("#ebc249");
      tertiary = chalk.bold.hex("#ff8c08");
      error = chalk.hex("#ff8400");
      html = ["#ff8c08", "#ffad08", "#f5bb47"];
      break;
    default:
      main = chalk.yellow;
      subcolor = chalk.hex("#4687f0");
      secondary = chalk.blueBright;
      tertiary = chalk.bold.hex("#3467eb");
      error = chalk.red.bold;
      html = ["#1702CF", "#11019F", "#1401BF"];
      break;
  }

  return { main, subcolor, error, secondary, tertiary, html };
}

module.exports = {
  getThemeColors,
  log: (text, type) => {
    const colors = getThemeColors();
    switch (type) {
      case "warn":
        process.stderr.write(colors.error(`[ ERROR ] `) + text + "\n");
        break;
      case "error":
        console.log(chalk.red.bold(`[ ERROR ] `) + text + "\n");
        break;
      case "load":
        console.log(colors.subcolor(`[ NEW USER ] `) + text + "\n");
        break;
      default:
        process.stderr.write(colors.subcolor(`[ ${String(type).toUpperCase()} ] `) + text + "\n");
        break;
    }
  },
  error: (text, type) => {
    process.stderr.write(chalk.red(`[ ${type} ] `) + text + "\n");
  },
  err: (text, type) => {
    process.stderr.write(getThemeColors().subcolor(`[ ${type} ] `) + text + "\n");
  },
  warn: (text, type) => {
    process.stderr.write(getThemeColors().subcolor(`[ ${type} ] `) + text + "\n");
  },
  loader: (data, option) => {
    const colors = getThemeColors();
    switch (option) {
      case "warn":
        process.stderr.write(colors.subcolor(`[ SYSTEM ] `) + data + "\n");
        break;
      case "error":
        process.stderr.write(chalk.red(`[ SYSTEM ] `) + data + "\n");
        break;
      default:
        console.log(colors.subcolor(`[ SYSTEM ] `) + data);
        break;
    }
  },
};
