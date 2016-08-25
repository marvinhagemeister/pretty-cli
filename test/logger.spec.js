const t = require('chai').assert;
const chalk = require('chalk');
const { render, generic } = require('../src/logger');

describe('Logger', () => {
  describe('render()', () => {
    it('should return the message', () => {
      let input = {
        title: 'Hello World',
        message: 'yo!'
      };

      t.equal(render(input), 'Hello World yo!\n\n');
    });
  });
});
