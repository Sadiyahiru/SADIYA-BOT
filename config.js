const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DigSgTKS#C9OI-vydBwBJn5mzWFFRM6m7hhJJ-8rg3aOGvXyJ-CI", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/wdwNN0R/0cc16fb80f7be4f3.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello I am sadeesha hirushan*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "public", //private or public
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",    
};
