const fs = require('fs');

// Example when handled through fs.watch() listener
const w = fs.watch('.', { encoding: 'buffer' }, (eventType, filename) => {
    if (filename) {
      console.log(filename.toString());
      // Prints: <Buffer ...>
    }
  });
  

w.on('change', () => {
    console.log('hello');
});



