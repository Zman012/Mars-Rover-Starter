const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  //test 1
  test("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

  //write code in TDD style - write test and then focus on code to make it pass (DRY) 
  //use IT Statements
  //test 2 etc
  test("constructor sets command type", function () {   //correctly assigns a commandtype
    const commandType = 'MODE_CHANGE';
    const command = new Command(commandType, 'LOW_POWER'); //new instance passing MODE_CHange as the command type, and low_power as the value
    expect(command.commandType).toBe(commandType); //checking if command.commandtype is equal to commandtype
});
  //test 3
  test("constructor sets a value passed in as the 2nd argument", function () { //correctly assigns a value
    const commandType = 'MOVE';
    const value = 12000;
    const command = new Command(commandType, value); //creates new instance of the Command class
    expect(command.value).toBe(value); //checks value property of the command is equal to 12000
});


});