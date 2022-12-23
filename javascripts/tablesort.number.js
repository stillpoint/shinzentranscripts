(function(){
  var cleanNumber = function(i) {
    return i.replace(/[^\-?0-9.]/g, '');
  },

  compareNumber = function(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    a = isNaN(a) ? 0 : a;
    b = isNaN(b) ? 0 : b;

    return a - b;
  };

  Tablesort.extend('number', function(item) {
    // Check if the item is a duration value
    if (/^\d+\s*min$/.test(item)) return true;

    // Check for other number formats
    return item.match(/^[-+]?[£\x24Û¢´€]?\d+\s*([,\.]\d{0,2})/) || // Prefixed currency
      item.match(/^[-+]?\d+\s*([,\.]\d{0,2})?[£\x24Û¢´€]/) || // Suffixed currency
      item.match(/^[-+]?(\d)*-?([,\.]){0,1}-?(\d)+([E,e][\-+][\d]+)?%?$/); // Number
  }, function(a, b) {
    // Check if either item is a duration value
    if (/^\d+\s*min$/.test(a) || /^\d+\s*min$/.test(b)) {
      // Extract the minute values from the duration strings
      a = /^\d+\s*min$/.test(a) ? parseInt(a.replace(' min', ''), 10) : a;
      b = /^\d+\s*min$/.test(b) ? parseInt(b.replace(' min', ''), 10) : b;

      // Compare the minute values as numbers
      if (a === b) return 0;
      if (a > b) return -1;
      if (a < b) return 1;
    }

    a = cleanNumber(a);
    b = cleanNumber(b);

    return compareNumber(b, a);
  });
}());