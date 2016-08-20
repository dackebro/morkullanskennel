var fs = require('fs');

fs.readdir(__dirname, function(err, items) {
  items.forEach(function(item) {
    fs.rename('./' + item, './' + item.replace(' copy', 'Thumb'), (err) => {
      if (err) throw err;
    });
  });
});
