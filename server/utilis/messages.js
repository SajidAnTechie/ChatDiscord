const moment = require("moment");
function formattedMessage(name, text) {
  return {
    name,
    text,
    time: moment().format("h:mm a"),
  };
}

module.exports = formattedMessage;
