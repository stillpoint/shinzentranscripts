document$.subscribe(function() {
  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function(table) {
    var headers = table.querySelectorAll("th")
    var headerText = Array.prototype.map.call(headers, function(th) {
      return th.textContent
    })
    if (headerText.indexOf("Timestamp") === -1 && headerText.indexOf("Text Segment") === -1) {
      new Tablesort(table)
    }
  })
})