document.getElementById("contato").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    
   
    const table = document.getElementById("ct").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);
    
    nameCell.textContent = name;
    phoneCell.textContent = phone;
    
  
    document.getElementById("contato").reset();
});
