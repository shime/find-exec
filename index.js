var child_process = require("child_process")
  , exec = require('exec-sync')

module.exports = function(){
  var self = this
    , commands = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.apply(arguments)
    , command

  for(i = 0; i < commands.length; i++){
    command = commands[i]

    try {
      exec(command)
    } catch (err) {
      if (i === (commands.length - 1))
        throw new Error("Couldn't find a suitable shell command")

      continue
    }
    break
  }

  return command;
}
