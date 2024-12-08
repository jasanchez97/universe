document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const index = params.get('index');
  const members = JSON.parse(localStorage.getItem('members')) || [];

  if (index === null || index < 0 || index >= members.length) {
    alert('Member not found.');
    return;
  }

  const member = members[index];

  // Fill the form with the member's data
  document.getElementById('name').value = member.name;
  document.getElementById('surname').value = member.surname;
  document.getElementById('address').value = member.address;
  document.getElementById('email').value = member.email;
  document.getElementById('contact').value = member.contact;
  document.getElementById('social-network').value = member.socialNetwork;

  const form = document.getElementById('edit-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Update the member's data
    member.name = document.getElementById('name').value;
    member.surname = document.getElementById('surname').value;
    member.address = document.getElementById('address').value;
    member.email = document.getElementById('email').value;
    member.contact = document.getElementById('contact').value;
    member.socialNetwork = document.getElementById('social-network').value;

    // Save the updated data to localStorage
    members[index] = member;
    localStorage.setItem('members', JSON.stringify(members));

    alert('Member updated successfully');
    window.location.href = 'register.html'; // Redirect to the member list page
  });
});
