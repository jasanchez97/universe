// Declare the selected row globally
var selectedRow = null;

// Function to handle the form submit event
document.getElementById("crud-form").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent the default form submission
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
});

// Read the form data
function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["surname"] = document.getElementById("surname").value;
  formData["adress"] = document.getElementById("adress").value;
  formData["email"] = document.getElementById("email").value;
  formData["contact"] = document.getElementById("contact").value;
  formData["social-network"] = document.getElementById("social-network").value;
  console.log(formData);  // Check if the formData object contains the correct values
  return formData;
}

// Insert a new record into the table
function insertNewRecord(data) {
    var table = document.getElementById("miembros-tbody");
    var newRow = table.insertRow(table.length);

    newRow.insertCell(0).innerHTML = data.name;
    newRow.insertCell(1).innerHTML = data.surname;
    newRow.insertCell(2).innerHTML = data.adress;
    newRow.insertCell(3).innerHTML = data.email;
    newRow.insertCell(4).innerHTML = data.contact;
    newRow.insertCell(5).innerHTML = data["social-network"];
    newRow.insertCell(6).innerHTML = `<a href="javascript:void(0);" onClick="onEdit(this)">Edit</a> 
                                       <a href="javascript:void(0);" onClick="onDelete(this)">Delete</a>`;
}

// Function to edit a record
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("surname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("adress").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[4].innerHTML;
    document.getElementById("social-network").value = selectedRow.cells[5].innerHTML;
}

// Function to update a record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.surname;
    selectedRow.cells[2].innerHTML = formData.adress;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.contact;
    selectedRow.cells[5].innerHTML = formData["social-network"];
}

// Function to reset the form
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("adress").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("social-network").value = "";
    selectedRow = null;
}

// Validation function
function validate() {
    let isValid = true;

    // Validate the "name" field (required)
    const name = document.getElementById("name").value;
    if (name === "") {
        isValid = false;
        showError("name", "Name is required");
    } else {
        hideError("name");
    }

    // Validate the "surname" field (optional, but not empty)
    const surname = document.getElementById("surname").value;
    if (surname !== "" && !/^[a-zA-Z]+$/.test(surname)) {
        isValid = false;
        showError("surname", "Only letters are allowed in the surname");
    } else {
        hideError("surname");
    }

    // Validate the "adress" field (optional)
    const adress = document.getElementById("adress").value;
    if (adress !== "" && adress.length < 5) {
        isValid = false;
        showError("adress", "Address must be at least 5 characters long");
    } else {
        hideError("adress");
    }

    // Validate the "email" field (requires a valid format)
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailPattern.test(email)) {
        isValid = false;
        showError("email", "Invalid email address");
    } else {
        hideError("email");
    }

    // Validate the "contact" field (must be numbers only and between 9-12 digits)
    const contact = document.getElementById("contact").value;
    const contactPattern = /^\d{9,12}$/;
    if (contact === "" || !contactPattern.test(contact)) {
        isValid = false;
        showError("contact", "Contact must be a number between 9 and 12 digits");
    } else {
        hideError("contact");
    }

    return isValid;
}

// Show the error message
function showError(field, message) {
    const errorElement = document.getElementById(`form-${field}-error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.visibility = "visible";
    }
}

// Hide the error message
function hideError(field) {
    const errorElement = document.getElementById(`form-${field}-error`);
    if (errorElement) {
        errorElement.style.visibility = "hidden";
    }
}

// Function to delete a record
function onDelete(td) {
    if (confirm("Are you sure you want to delete this record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("miembros-tbody").deleteRow(row.rowIndex);
        resetForm();
    }
}