document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea[name="message"]').value;
    
    if(name && email && message) {
      alert(`Thank you for reaching out, ${name}! We will get back to you soon.`);
      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  