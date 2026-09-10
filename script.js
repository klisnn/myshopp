const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const products = document.querySelectorAll(".product-card");

function filterProducts() {

    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    products.forEach(function(product) {

        const productName = product.querySelector("h3").textContent.toLowerCase();
        const productCategory = product.dataset.category;

        const matchesSearch = productName.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}

searchInput.addEventListener("input", filterProducts);

categoryFilter.addEventListener("change", filterProducts);
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (name === "") {
            formMessage.textContent = "Please enter your name.";
            formMessage.style.color = "red";
            return;
        }

        if (email === "" || !email.includes("@")) {
            formMessage.textContent = "Please enter a valid email.";
            formMessage.style.color = "red";
            return;
        }

        if (message.length < 10) {
            formMessage.textContent = "Message must contain at least 10 characters.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";

        contactForm.reset();
    });

}
const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

if (themeToggle) {

    themeToggle.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");
            themeToggle.textContent = " Light Mode";

        } else {

            localStorage.setItem("theme", "light");
            themeToggle.textContent = " Dark Mode";

        }

    });

}
