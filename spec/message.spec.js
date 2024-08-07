const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
    //test 4
    test("throws error if a name is NOT passed into the constructor as the first parameter", function() {
        expect( function() { new Message();}).toThrow(new Error('Name type required'));
      });
    //test 5
    test("constructor sets name", function(){ //checking Message class constructor perpoerly intializes the name
        const testName = 'Test Message'; //variable to hold the string  - reps expected vaule that should be assignmed to name
        const message = new Message(testName); //creates a new instance of the Message class - testName is passed as first arguement
        expect(message.name).toBe(testName); //checks wehter message.name is equal to testName
    });

    //test 6
    test("contains a commands array passed into the constructor as the 2nd argument", function () {
        const testName = 'Test Message'; // Define the test name
        const commandsArray = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')]; // Example commands array - commands prperty of the Message instance is set to the commandsArray that was passed in
        
        const message = new Message(testName, commandsArray); // Create a new Message object with commandsArray
        
        // Verify that the commands property is correctly set
        expect(message.commands).toEqual(commandsArray);
      });
      
});
