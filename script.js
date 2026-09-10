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
