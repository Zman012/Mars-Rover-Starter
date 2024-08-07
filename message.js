class Message {
   constructor(name, commands) {
      this.name = name;
      if (!name) {
         throw Error("Name type required")
      }
      this.commands = commands || []; //defaults to empty array if commands not provided
   }
}

module.exports = Message;