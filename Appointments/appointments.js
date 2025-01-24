function bookAppointment() {
    const studentNo = document.getElementById('appointment-name').value;
    const documentType = document.getElementById('document-type').value;
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;

    if (!studentNo || !documentType || !date || !time) {
        alert('Please fill out all fields.');
        return;
    }

    const appointmentList = document.getElementById('appointment-list');
    const appointmentCalendar = document.getElementById('appointment-calendar').getElementsByTagName('tbody')[0];

    // Add to Upcoming Appointments
    const li = document.createElement('li');
    li.textContent = `Student No: ${studentNo}, Document: ${documentType}, Date: ${date}, Time: ${time}`;
    appointmentList.appendChild(li);

    // Add to Appointment Calendar
    const row = appointmentCalendar.insertRow();
    row.innerHTML = `<td>${date}</td><td>${time}</td><td>${studentNo}</td><td>${documentType}</td>`;

    alert('Appointment booked successfully!');
}
