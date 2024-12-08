document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const index = params.get('index');
  const members = JSON.parse(localStorage.getItem('members')) || [];

  if (index === null || index < 0 || index >= members.length) {
    alert('Miembro no encontrado.');
    return;
  }

  const member = members[index];

  // Llenar el formulario con los datos del miembro
  document.getElementById('name').value = member.name;
  document.getElementById('surname').value = member.surname;
  document.getElementById('address').value = member.address;
  document.getElementById('email').value = member.email;
  document.getElementById('contact').value = member.contact;
  document.getElementById('social-network').value = member.socialNetwork;

  const form = document.getElementById('edit-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Actualizar los datos del miembro
    member.name = document.getElementById('name').value;
    member.surname = document.getElementById('surname').value;
    member.address = document.getElementById('address').value;
    member.email = document.getElementById('email').value;
    member.contact = document.getElementById('contact').value;
    member.socialNetwork = document.getElementById('social-network').value;

    // Guardar los cambios en localStorage
    members[index] = member;
    localStorage.setItem('members', JSON.stringify(members));

    alert('Miembro actualizado correctamente');
    window.location.href = 'register.html'; // Regresar a la lista de miembros
  });
});