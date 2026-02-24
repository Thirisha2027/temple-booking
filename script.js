function setTheme(theme) {
  document.getElementById("formContainer").className =
    "booking-form " + theme;
}

function confirmBooking(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const tickets = document.getElementById("tickets").value;

  const ticket = document.getElementById("ticket");
  ticket.style.display = "block";
  ticket.innerHTML = `
    🎟 Ticket Confirmed<br><br>
    Name: ${name}<br>
    Date: ${date}<br>
    Tickets: ${tickets}<br><br>
    🙏 Have a blessed darshan
  `;
}