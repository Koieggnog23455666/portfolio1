// Get the "Home" link element by its ID
var homeLink = document.getElementById('home');

// Add a click event listener to the "Home" link
homeLink.addEventListener('click', function(event) {
    // Prevent the default behavior of the link (e.g., navigating to a different page)
    event.preventDefault();

    // Reload the current page
    location.reload();
});

document.getElementById('about').addEventListener('click', function() {
    openNewPage();
});

function openNewPage() {
    // Replace 'your-about-page.html' with the actual URL of your about page
    window.location.href = 'about.html';
} 
