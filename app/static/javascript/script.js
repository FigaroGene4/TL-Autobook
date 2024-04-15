window.onload = function() {
  // Get all the table rows
  let rows = document.querySelectorAll('#myTable tbody tr');

  // Loop through each table row
  for(let i = 0; i < rows.length; i++) {
      // Get all the table data in the row
      let tds = rows[i].querySelectorAll('td:not(:last-child)'); // Exclude the last td which contains the button

      // Initialize a flag to check if data exists
      let dataExists = false;

      // Loop through each table data
      for(let j = 0; j < tds.length; j++) {
          // If the table data contains data (not empty or whitespace), set the flag to true
          if(tds[j].textContent.trim() !== '') {
              dataExists = true;
              break;
          }
      }

      // If no data exists, hide the button
      if(!dataExists) {
          let button = rows[i].querySelector('#resolveButton');
          if(button) {
              button.style.display = 'none';
          }
      }
  }
}



document.getElementById('yesButtonModal').addEventListener('click', function() {
  var myDiv = document.getElementById('myDiv');
  myDiv.style.display = 'block';
  myDiv.classList.add('fade-out');

  // Set the display to 'none' after the fade-out animation is complete
  setTimeout(function() {
      myDiv.style.display = 'none';
      // Remove the fade-out class so it can be added again if the button is clicked multiple times
      myDiv.classList.remove('fade-out');
  }, 20000); // 20000ms = 20s, which is the duration of the fade-out animation
});


document.getElementById('search-button').addEventListener('click', function() {
    document.getElementById('total-balance').style.display = 'block';
});

  

document.getElementById('yesButtonModal').addEventListener('click', function() {
    // Get the table body
    var tbody = document.querySelector('#myTable tbody');

    // Get all the table rows in the body
    var rows = tbody.querySelectorAll('tr');

    // Loop through each table row
    for(var i = 0; i < rows.length; i++) {
        // Get all the table data in the row
        var tds = rows[i].querySelectorAll('td');

        // Loop through each table data
        for(var j = 0; j < tds.length; j++) {
            // Clear the table data
            tds[j].textContent = '';
        }
    }
});

