const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  // Test 7
  test("constructor sets position and default values for mode and generatorWatts", function() {
      const rover = new Rover(98382);
      expect(rover.position).toBe(98382);
      expect(rover.mode).toBe('NORMAL');
      expect(rover.generatorWatts).toBe(110);
  });

  // Test 8
  test("response returned by receiveMessage contains the name of the message", function() {
      const commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
      const message = new Message('Test message', commands);
      const rover = new Rover(98382);
      const response = rover.receiveMessage(message);
      expect(response.message).toBe('Test message');
  });

  // Test 9
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
      const commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
      const message = new Message('Test message with two commands', commands);
      const rover = new Rover(98382);
      const response = rover.receiveMessage(message);
      expect(response.results.length).toBe(2);
  });

  // Test 10
  test("responds correctly to the status check command", function() {
      const commands = [new Command('STATUS_CHECK')];
      const message = new Message('Status check', commands);
      const rover = new Rover(98382);
      const response = rover.receiveMessage(message);
      expect(response.results[0].completed).toBe(true);
      expect(response.results[0].roverStatus).toEqual({
          mode: 'NORMAL',
          generatorWatts: 110,
          position: 98382
      });
  });

  // Test 11
  test("responds correctly to the mode change command", function() {
      const commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
      const message = new Message('Mode change', commands);
      const rover = new Rover(98382);
      const response = rover.receiveMessage(message);
      expect(response.results[0].completed).toBe(true);
      expect(rover.mode).toBe('LOW_POWER');
  });

  // Test 12
  test("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
      const commands = [new Command('MOVE', 99999)];
      const message = new Message('Move command', commands);
      const rover = new Rover(98382);
      rover.mode = 'LOW_POWER';
      const response = rover.receiveMessage(message);
      expect(response.results[0].completed).toBe(false);
      expect(rover.position).toBe(98382); // Position should not change
  });

  // Test 13
  test("responds with the position for the move command", function() {
      const commands = [new Command('MOVE', 12345)];
      const message = new Message('Move command', commands);
      const rover = new Rover(98382);
      const response = rover.receiveMessage(message);
      expect(response.results[0].completed).toBe(true);
      expect(rover.position).toBe(12345); // Position should be updated
  });
});