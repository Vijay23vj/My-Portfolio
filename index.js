AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

document.querySelector('a[href="#hero"]').addEventListener('click', () => {
    setTimeout(() => {
        AOS.refresh();
    }, 100);
});

const form = document.getElementById("contact-form");
const toast = new bootstrap.Toast(document.getElementById("thankYouToast"));

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message || !email.includes("@")) {
        alert("Please enter valid details.");
        return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    fetch("https://formspree.io/f/xgvarbrl", {
        method: "POST",
        body: formData
    })
        .then(response => {
            if (response.ok) {
                setTimeout(() => {
                    form.reset();
                    toast.show();
                }, 1000);
            } else {
                alert("Something went wrong. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again later.");
        });
});


const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '.navbar',
    offset: 100
});

document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        const bsCollapse = bootstrap.Collapse.getInstance(navbar);
        if (bsCollapse) {
            bsCollapse.hide(); // Close the menu
        }
    });
});

var firstTyped = new Typed('#typed-text', {
    strings: ['Hi'],
    typeSpeed: 100,
    backSpeed: 80,
    showCursor: false,
    onComplete: function () {
        setTimeout(() => {
            document.getElementById('typed-text').innerHTML = '';
            new Typed('#typed-text', {
                strings: ['Vijay Hiremath', 'Java Full Stack Developer'],
                typeSpeed: 100,
                backSpeed: 80,
                backDelay: 1000,
                loop: true,
            });
        }, 500);
    }
});
