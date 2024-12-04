const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PvxBwIIJ#taYUNacEW69PEuygm-oeR8Wq8r8Q6AGaz1luOH_d100",
MONGODB: process.env.MONGODB || "mongodb://mongo:uBbHeCAAvCKnupfwtkvvMkGsVCFGXaXB@junction.proxy.rlwy.net:14607"
};


