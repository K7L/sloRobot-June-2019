var array = [["EUR", "B1"], ["A2", "B2"], ["A3", "B3"], ["A4", "B4"]],
  table = document.getElementById("currency");

/* Method 1 */
// rows
for (var i = 1; i < table.rows.length; i++) {
  // cells
  for (var j = 0; j < table.rows[i].cells.length; j++) {
    table.rows[i].cells[j].innerHTML = array[i - 1][j];
  }
}
