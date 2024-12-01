// Declarar la fila seleccionada globalmente
var selectedRow = null;

// Función para manejar el evento submit del formulario
document.getElementById("crud-form").addEventListener("submit", function (event) {
    event.preventDefault();  // Evita que el formulario se envíe de manera predeterminada
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
});

// Leer los datos del formulario
function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["surname"] = document.getElementById("surname").value;
  formData["adress"] = document.getElementById("adress").value;
  formData["email"] = document.getElementById("email").value;
  formData["contact"] = document.getElementById("contact").value;
  formData["social-network"] = document.getElementById("social-network").value;
  console.log(formData);  // Verifica si el objeto formData tiene los valores correctos
  return formData;
}

// Insertar un nuevo registro en la tabla
function insertNewRecord(data) {
    var table = document.getElementById("miembros-tbody");
    var newRow = table.insertRow(table.length);

    newRow.insertCell(0).innerHTML = data.name;
    newRow.insertCell(1).innerHTML = data.surname;
    newRow.insertCell(2).innerHTML = data.adress;
    newRow.insertCell(3).innerHTML = data.email;
    newRow.insertCell(4).innerHTML = data.contact;
    newRow.insertCell(5).innerHTML = data["social-network"];
    newRow.insertCell(6).innerHTML = `<a href="javascript:void(0);" onClick="onEdit(this)">Editar</a> 
                                       <a href="javascript:void(0);" onClick="onDelete(this)">Eliminar</a>`;
}

// Función para editar un registro
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("surname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("adress").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[4].innerHTML;
    document.getElementById("social-network").value = selectedRow.cells[5].innerHTML;
}

// Función para actualizar un registro
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.surname;
    selectedRow.cells[2].innerHTML = formData.adress;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.contact;
    selectedRow.cells[5].innerHTML = formData["social-network"];
}

// Función para restablecer el formulario
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("adress").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("social-network").value = "";
    selectedRow = null;
}

// Función de validación
function validate() {
    let isValid = true;

    // Validar el campo "name" (obligatorio)
    const name = document.getElementById("name").value;
    if (name === "") {
        isValid = false;
        showError("name", "El nombre es obligatorio");
    } else {
        hideError("name");
    }

    // Validar el campo "surname" (opcional, pero no vacío)
    const surname = document.getElementById("surname").value;
    if (surname !== "" && !/^[a-zA-Z]+$/.test(surname)) {
        isValid = false;
        showError("surname", "Solo se permiten letras en los apellidos");
    } else {
        hideError("surname");
    }

    // Validar el campo "adress" (opcional)
    const adress = document.getElementById("adress").value;
    if (adress !== "" && adress.length < 5) {
        isValid = false;
        showError("adress", "La dirección debe tener al menos 5 caracteres");
    } else {
        hideError("adress");
    }

    // Validar el campo "email" (requiere formato válido)
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailPattern.test(email)) {
        isValid = false;
        showError("email", "Correo electrónico inválido");
    } else {
        hideError("email");
    }

    // Validar el campo "contact" (debe ser solo números y entre 9-12 dígitos)
    const contact = document.getElementById("contact").value;
    const contactPattern = /^\d{9,12}$/;
    if (contact === "" || !contactPattern.test(contact)) {
        isValid = false;
        showError("contact", "El contacto debe ser un número entre 9 y 12 dígitos");
    } else {
        hideError("contact");
    }

    return isValid;
}

// Mostrar el mensaje de error
function showError(field, message) {
    const errorElement = document.getElementById(`form-${field}-error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.visibility = "visible";
    }
}

// Ocultar el mensaje de error
function hideError(field) {
    const errorElement = document.getElementById(`form-${field}-error`);
    if (errorElement) {
        errorElement.style.visibility = "hidden";
    }
}

// Función para eliminar un registro
function onDelete(td) {
    if (confirm("¿Seguro que quieres eliminar este registro?")) {
        row = td.parentElement.parentElement;
        document.getElementById("miembros-tbody").deleteRow(row.rowIndex);
        resetForm();
    }
}
