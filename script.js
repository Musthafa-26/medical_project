// ========================================
// PRODUCT DATA
// ========================================

const products = [

    {
        name: "Vitamin C Tablets",
        category: "tablets",
        price: 199,
        rating: 5,
        icon: "bi-capsule"
    },

    {
        name: "Multivitamin Tablets",
        category: "tablets",
        price: 299,
        rating: 4,
        icon: "bi-capsule-pill"
    },

    {
        name: "Calcium Tablets",
        category: "tablets",
        price: 249,
        rating: 4,
        icon: "bi-capsule"
    },

    {
        name: "Herbal Hair Oil",
        category: "oil",
        price: 249,
        rating: 4,
        icon: "bi-droplet"
    },

    {
        name: "Coconut Hair Oil",
        category: "oil",
        price: 180,
        rating: 5,
        icon: "bi-droplet"
    },

    {
        name: "Almond Hair Oil",
        category: "oil",
        price: 220,
        rating: 4,
        icon: "bi-droplet"
    },

    {
        name: "Moisturizing Cream",
        category: "skin",
        price: 299,
        rating: 4,
        icon: "bi-droplet-half"
    },

    {
        name: "Aloe Vera Cream",
        category: "skin",
        price: 199,
        rating: 5,
        icon: "bi-droplet-half"
    },

    {
        name: "Vitamin E Skin Cream",
        category: "skin",
        price: 349,
        rating: 4,
        icon: "bi-droplet-half"
    },

    {
        name: "Protein Powder",
        category: "health",
        price: 599,
        rating: 5,
        icon: "bi-heart-pulse"
    },

    {
        name: "Health Drink Powder",
        category: "health",
        price: 450,
        rating: 4,
        icon: "bi-cup-hot"
    },

    {
        name: "Nutrition Powder",
        category: "health",
        price: 699,
        rating: 5,
        icon: "bi-heart-pulse"
    },

    {
        name: "Antiseptic Cream",
        category: "firstaid",
        price: 120,
        rating: 4,
        icon: "bi-bandaid"
    },

    {
        name: "First Aid Bandage",
        category: "firstaid",
        price: 80,
        rating: 4,
        icon: "bi-bandaid"
    },

    {
        name: "Medical Cotton",
        category: "firstaid",
        price: 100,
        rating: 5,
        icon: "bi-plus-circle"
    },

    {
        name: "Pain Relief Tablets",
        category: "tablets",
        price: 150,
        rating: 4,
        icon: "bi-capsule"
    },

    {
        name: "Iron Tablets",
        category: "tablets",
        price: 220,
        rating: 4,
        icon: "bi-capsule-pill"
    },

    {
        name: "Face Moisturizer",
        category: "skin",
        price: 399,
        rating: 5,
        icon: "bi-droplet-half"
    },

    {
        name: "Energy Drink Powder",
        category: "health",
        price: 499,
        rating: 4,
        icon: "bi-cup-hot"
    },

    {
        name: "Antiseptic Liquid",
        category: "firstaid",
        price: 180,
        rating: 5,
        icon: "bi-droplet"
    }

];


// ========================================
// DISPLAY PRODUCTS
// ========================================

const productContainer =
    document.getElementById("productContainer");


function displayProducts(productList) {

    if (!productContainer) {
        return;
    }

    productContainer.innerHTML = "";


    if (productList.length === 0) {

        document
            .getElementById("noProducts")
            .classList.remove("d-none");

        return;

    }


    document
        .getElementById("noProducts")
        .classList.add("d-none");


    productList.forEach(product => {

        const stars =
            "★".repeat(product.rating) +
            "☆".repeat(5 - product.rating);


        const card = `

            <div class="col-sm-6 col-lg-4 col-xl-3">

                <div class="product-card">

                    <div class="product-image">

                        <i class="bi ${product.icon}"></i>

                    </div>


                    <div class="p-3">

                        <span class="badge bg-success-subtle text-success">
                            ${product.category}
                        </span>


                        <h5 class="mt-2">
                            ${product.name}
                        </h5>


                        <div class="rating">
                            ${stars}
                        </div>


                        <div class="d-flex
                                    justify-content-between
                                    align-items-center
                                    mt-3">

                            <h5 class="text-success mb-0">
                                ₹${product.price}
                            </h5>


                            <button
                                class="btn btn-sm btn-success add-cart"
                                data-name="${product.name}">

                                <i class="bi bi-cart-plus"></i>

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        `;


        productContainer.innerHTML += card;

    });


    // ADD CART BUTTONS

    document
        .querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener("click", () => {

                addToCart();

            });

        });

}


// ========================================
// CART
// ========================================

let cartCount = 0;


function addToCart() {

    cartCount++;

    const cartElements =
        document.querySelectorAll("#cartCount");


    cartElements.forEach(element => {

        element.textContent = cartCount;

    });

}


// ========================================
// SEARCH
// ========================================

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const searchValue =
                this.value.toLowerCase().trim();


            const filteredProducts =
                products.filter(product =>

                    product.name
                        .toLowerCase()
                        .includes(searchValue)

                );


            displayProducts(filteredProducts);

        }
    );

}


// ========================================
// CATEGORY FILTER
// ========================================

document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

        button.addEventListener("click", function () {

            document
                .querySelectorAll(".filter-btn")
                .forEach(btn => {

                    btn.classList.remove("active");

                    btn.classList.remove("btn-success");

                    btn.classList.add("btn-outline-success");

                });


            this.classList.add("active");

            this.classList.remove("btn-outline-success");

            this.classList.add("btn-success");


            const category =
                this.dataset.category;


            if (category === "all") {

                displayProducts(products);

            } else {

                const filtered =
                    products.filter(
                        product =>
                            product.category === category
                    );

                displayProducts(filtered);

            }

        });

    });


// ========================================
// CONTACT FORM
// ========================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const message =
                document.getElementById("message").value.trim();


            const formMessage =
                document.getElementById("formMessage");


            if (
                name === "" ||
                email === "" ||
                phone === "" ||
                message === ""
            ) {

                formMessage.innerHTML = `

                    <div class="alert alert-danger">

                        Please fill in all required fields.

                    </div>

                `;

                return;

            }


            formMessage.innerHTML = `

                <div class="alert alert-success">

                    Thank you, ${name}!
                    Your message has been submitted successfully.

                </div>

            `;


            contactForm.reset();

        }
    );

}


// ========================================
// LOAD PRODUCTS
// ========================================

displayProducts(products);