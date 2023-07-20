// task1.js
function stringLength(string) {
    const length = string.length;
  
    if (length < 1 || length > 10) {
      throw new Error('String must be at least 1 character long and not longer than 10 characters.');
    }
  
    return length;
  }
  
  module.exports = stringLength;
  