var exec = require('execSync').exec

module.exports = function(){
  var self = this
    , commands = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.apply(arguments)
    , command = null

  commands.some(function(c){
    if (exec(c).code == 0){
      command = c
      return true
    }
  })

  return command
}
