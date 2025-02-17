// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation (can be extended)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    if (name === "" || email === "") {
        alert("Please fill in both fields!");
        return;
    }

    alert(`Thank you, ${name}! We will contact you at ${email}.`);
});
