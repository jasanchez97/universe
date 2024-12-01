document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('crud-form');
  
  // Función para obtener datos del formulario
  function getFormData() {
      return {
          name: document.getElementById('name').value,
          surname: document.getElementById('surname').value,
          address: document.getElementById('adress').value,
          email: document.getElementById('email').value,
          contact: document.getElementById('contact').value,
          socialNetwork: document.getElementById('social-network').value
      };
  }

  // Validación de datos
  function validateForm() {
      let isValid = true;
      
      // Revisa cada campo y muestra errores si es necesario
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      if (!name || !email) {
          isValid = false;
          if (!name) document.getElementById('form-name-error').innerText = 'El nombre es obligatorio';
          if (!email) document.getElementById('form-email-error').innerText = 'El correo es obligatorio';
      }

      return isValid;
  }

  // Función para agregar datos al LocalStorage
  function saveDataToLocalStorage() {
      const formData = getFormData();
      const storedMembers = JSON.parse(localStorage.getItem('members')) || [];
      storedMembers.push(formData);
      localStorage.setItem('members', JSON.stringify(storedMembers));
  }

  // Función para mostrar los datos en la tabla
  function displayLocalStorageData() {
    let members = JSON.parse(localStorage.getItem('members')) || [];
    let tableBody = document.getElementById('members-tbody');
    
    // Limpiar las filas existentes
    tableBody.innerHTML = '';
    
    // Crear las filas dinámicamente
    members.forEach((member, index) => {
      let row = document.createElement('tr');
      
      // Crear las celdas para cada miembro
      row.innerHTML = `
        <td>${member.name}</td>
        <td>${member.surname}</td>
        <td>${member.adress}</td>
        <td>${member.email}</td>
        <td>${member.contact}</td>
        <td>${member.socialNetwork}</td>
        <td><button class="btn-delete" onclick="deleteMember(${index})">Eliminar</button></td>
      `;
      
      // Añadir la fila al cuerpo de la tabla
      tableBody.appendChild(row);
    });
  }
  
  function deleteMember(index) {
    let members = JSON.parse(localStorage.getItem('members')) || [];
    // Eliminar el miembro correspondiente
    members.splice(index, 1);
    // Actualizar el almacenamiento local
    localStorage.setItem('members', JSON.stringify(members));
    // Volver a renderizar los miembros en la tabla
    displayLocalStorageData();
  }

  // Elimina un miembro del LocalStorage
  window.deleteMember = function(index) {
      const storedMembers = JSON.parse(localStorage.getItem('members')) || [];
      storedMembers.splice(index, 1);  // Elimina el miembro en la posición `index`
      localStorage.setItem('members', JSON.stringify(storedMembers));
      displayLocalStorageData();  // Vuelve a mostrar los datos después de la eliminación
  };

  // Maneja el envío del formulario
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      if (validateForm()) {
          saveDataToLocalStorage();
          displayLocalStorageData();
          form.reset();  // Limpia el formulario después de guardar
      }
  });

  // Carga los miembros desde el LocalStorage cuando se carga la página
  displayLocalStorageData();
});