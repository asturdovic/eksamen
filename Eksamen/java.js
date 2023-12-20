var currentVideo = 0;

function toggleMenu() {
    var navbarLinks = document.getElementById("navbar-links");
    var menuIcon = document.getElementById("menu-icon");

    navbarLinks.style.display = navbarLinks.style.display === "flex" ? "none" : "flex";
    menuIcon.classList.toggle("open");
}

// Call switchVideo function to start the slideshow
setInterval(switchVideo, 10000); // Switch videos every 10 seconds (adjust the interval as needed)

function switchVideo() {
    var videos = document.querySelectorAll('.video-container video');

    videos[currentVideo].style.display = 'none';
    currentVideo = (currentVideo + 1) % videos.length;
    videos[currentVideo].style.display = 'block';
}

var currentImage = 0;
var totalImages = document.querySelectorAll('.product-image img').length;
var imageContainer = document.querySelector('.product-image');

document.getElementById('arrow-prev').addEventListener('click', function () {
    if (currentImage > 0) {
        currentImage--;
        updateSlider();
    }
});

document.getElementById('arrow-next').addEventListener('click', function () {
    if (currentImage < totalImages - 1) {
        currentImage++;
        updateSlider();
    }
});

function updateSlider() {
    var translateValue = -currentImage * 100 + '%';
    imageContainer.style.transform = 'translateX(' + translateValue + ')';
}

// Create an array to store the products in the basket
var basket = [];

// Function to add the current product to the basket
function addToBasket() {
    // Get the product details (you can enhance this based on your actual product)
    var product = {
        title: "Product Title",
        description: "This is the product description. Replace this text with your actual product details.",
    };

    // Add the product to the basket array
    basket.push(product);

    // Optionally, you can display a message or update the UI
    alert('Product added to basket!');
}

// Function to display the basket content
function displayBasket() {
    // Display the basket content (you can enhance this based on your UI/UX)
    alert('Basket Content:\n' + JSON.stringify(basket, null, 2));
}