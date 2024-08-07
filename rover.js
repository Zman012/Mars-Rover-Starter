class Rover {
   constructor(position) {
       this.position = position;
       this.mode = 'NORMAL';
       this.generatorWatts = 110;
   }

   receiveMessage(message) {
       const results = message.commands.map(command => {
           switch (command.commandType) {
               case 'MOVE':
                   return this.handleMoveCommand(command);
               case 'STATUS_CHECK':
                   return this.handleStatusCheckCommand();
               case 'MODE_CHANGE':
                   return this.handleModeChangeCommand(command);
               default:
                   return { completed: false };
           }
       });

       return {
           message: message.name,
           results: results
       };
   }

   handleMoveCommand(command) {
       if (this.mode === 'LOW_POWER') {
           return { completed: false };
       } else {
           this.position = command.value;
           return { completed: true };
       }
   }

   handleStatusCheckCommand() {
       return {
           completed: true,
           roverStatus: {
               mode: this.mode,
               generatorWatts: this.generatorWatts,
               position: this.position
           }
       };
   }

   handleModeChangeCommand(command) {
       this.mode = command.value;
       return { completed: true };
   }
}

module.exports = Rover;