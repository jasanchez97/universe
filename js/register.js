document.addEventListener('DOMContentLoaded', function () {
  const tableBody = document.querySelector('[data-target="members-tbody"]');

  if (!tableBody) {
    console.error('Elemento con data-target="members-tbody" no encontrado.');
    return;
  }

  const members = JSON.parse(localStorage.getItem('members')) || [];

  function displayMembers() {
    tableBody.innerHTML = '';
    members.forEach((member, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${member.name}</td>
        <td>${member.surname}</td>
        <td>${member.address}</td>
        <td>${member.email}</td>
        <td>${member.contact}</td>
        <td>${member.socialNetwork}</td>
        <td>
          <a href="edit-member.html?index=${index}" class="btn-edit">Editar</a>
          <button class="btn-delete" data-index="${index}">Eliminar</button>
        </td>
      `;
      tableBody.appendChild(row);
    });

    // Agregar eventos de eliminar
    document.querySelectorAll('.btn-delete').forEach((button) => {
      button.addEventListener('click', deleteMember);
    });
  }

  function deleteMember(event) {
    const index = event.target.dataset.index;
    members.splice(index, 1);
    localStorage.setItem('members', JSON.stringify(members));
    displayMembers();
  }

  displayMembers();
});