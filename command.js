class Command {
   constructor(commandType, value) {
     this.commandType = commandType; //command type willbe mode_change, move or status_check
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value; //related to type of command (number, no value or string)
   }
 
 }
 
 module.exports = Command;