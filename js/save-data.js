document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('crud-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Recoger los datos del formulario
    const member = {
      name: document.getElementById('name').value,
      surname: document.getElementById('surname').value,
      address: document.getElementById('address').value,
      email: document.getElementById('email').value,
      contact: document.getElementById('contact').value,
      socialNetwork: document.getElementById('social-network').value,
    };

    // Obtener los miembros del localStorage
    let members = JSON.parse(localStorage.getItem('members')) || [];

    // Agregar el nuevo miembro
    members.push(member);

    // Guardar los miembros en el localStorage
    localStorage.setItem('members', JSON.stringify(members));

    // Limpiar el formulario
    form.reset();
  });
});