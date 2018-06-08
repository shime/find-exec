var spawn = require('child_process').spawnSync
var platform = require('os').platform()

module.exports = function(){
  var commands = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.apply(arguments)
  var command = null

  commands.some(function(c){
    var finder = findCommand()
    if (spawn(finder.cmd, finder.args.concat([ c ])).status === 0){
      command = c
      return true
    }
  })

  return command
}

function findCommand(){
  if (/^win/.test(platform)) {
    return { cmd: "where", args: [] }
  } else {
    return { cmd: "command", args: ['-v'] }
  }
}
