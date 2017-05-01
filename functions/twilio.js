const twilio = require('twilio');
const twilioKey = require('./twilioKey');

const accountSid = twilioKey.accountSid;
const authToken = twilioKey.authToken;

module.exports = new twilio.Twilio(accountSid, authToken);
