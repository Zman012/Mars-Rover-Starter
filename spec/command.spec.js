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
  test("constructor sets command type", function () {
    expect( function () { new Command();}); 
  });
  //test 3
  test("constructor sets a value passed in as the 2nd argument", function () {
  });


});