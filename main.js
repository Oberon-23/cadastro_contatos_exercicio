document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    
    const table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();


    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);

    nameCell.textContent = name;
    phoneCell.textContent = phone;

    
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';

    
    document.getElementById('name').focus();
});