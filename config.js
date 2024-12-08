const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "6yYXEJqZ#X236JjtRb5AmRU_AqycESurj-UuQhPMxkssPQJcil5c", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/stxzru.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello I am sadeesha hirushan*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "public", //private or public
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",    
};
