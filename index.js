var exec = require('child_process').execSync || require('execSync');

module.exports = function(){
  var self = this
    , commands = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.apply(arguments)
    , command

  for(i = 0; i < commands.length; i++){
    command = commands[i]

    try {
      exec(command)
    } catch (err) {
      command = null

      continue
    }
    break
  }

  return command;
}
