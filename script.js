document.getElementById("addButton").addEventListener("click" , function(event){
    event.preventDefault()

    const firstName = document.getElementById("firstname").value
    const lastName = document.getElementById("lastname").value
    const age = document.getElementById("age").value
    const isMarried = document.getElementById("ismarried").checked ? "Yes" : "No";
    const newRow = document.createElement("tr")
    
    const table = document.getElementById("table")
    
    if (firstName && lastName && age) {
        const firstnameTd = document.createElement("td")
    const lastnameTd = document.createElement("td")
    const ageTd = document.createElement("td")
    const ismarriedTd = document.createElement("td")
    
    firstnameTd.textContent = firstName
    lastnameTd.textContent = lastName
    ageTd.textContent = age
    ismarriedTd.textContent = isMarried
    
    table.append(newRow)
    newRow.append(firstnameTd)
    newRow.append(lastnameTd)
    newRow.append(ageTd)
    newRow.append(ismarriedTd)
    
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("ismarried").checked = false;
    }
    else{
        alert('Please fill all fields')
    }
})