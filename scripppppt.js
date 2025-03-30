// Function to toggle project description without interfering with navigation
function toggleDescription(element, event) {
    // Prevent the click from affecting navigation
    event.preventDefault();
    event.stopPropagation();
    
    const description = element.querySelector('p');
    const githubLink = element.querySelector('.github-link');
    
    if (description.style.display === 'block') {
        description.style.display = 'none';
        githubLink.style.display = 'none';
    } else {
        description.style.display = 'block';
        githubLink.style.display = 'block';
    }
}

// Handle navigation
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-item a');
    const pageContents = document.querySelectorAll('.page-content');
    
    // Set home as default active page
    document.getElementById('home').style.display = 'block';
    document.querySelector('.nav-item a[href="#home"]').parentElement.classList.add('active');
    
    // Show page messages
    document.querySelectorAll('.page-message').forEach(message => {
        message.style.display = 'block';
    });
    
    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            
            // Remove active class from all nav items
            navLinks.forEach(navLink => {
                navLink.parentElement.classList.remove('active');
            });
            
            // Add active class to clicked nav item
            this.parentElement.classList.add('active');
            
            // Hide all page contents
            pageContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // Show the target content if it exists
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.style.display = 'block';
            } else {
                // If the page doesn't exist, show a message
                document.getElementById('page-not-found').style.display = 'block';
            }
        });
    });
    
    // Add click events to project cards
    const projectCards = document.querySelectorAll('.project');
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            toggleDescription(this, e);
        });
    });
    
    // Initialize animation for particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        // Set random starting positions
        const randomLeft = Math.random() * 100;
        particle.style.left = `${randomLeft}%`;
        particle.style.animationDelay = `${Math.random() * 30}s`;
        particle.style.animationDuration = `${30 + Math.random() * 30}s`;
    });
});
