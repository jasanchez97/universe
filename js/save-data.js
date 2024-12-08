document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('crud-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect the form data
    const member = {
      name: document.getElementById('name').value,
      surname: document.getElementById('surname').value,
      address: document.getElementById('address').value,
      email: document.getElementById('email').value,
      contact: document.getElementById('contact').value,
      socialNetwork: document.getElementById('social-network').value,
    };

    // Get the members from localStorage
    let members = JSON.parse(localStorage.getItem('members')) || [];

    // Add the new member
    members.push(member);

    // Save the members in localStorage
    localStorage.setItem('members', JSON.stringify(members));

    // Reset the form
    form.reset();
  });
});
