// Function to toggle project description
function toggleDescription(element) {
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

// Get the current page from URL
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('index.html') || path.endsWith('/')) {
        return 'home';
    } else if (path.includes('about.html')) {
        return 'about';
    } else if (path.includes('services.html')) {
        return 'services';
    } else if (path.includes('portfolio.html')) {
        return 'portfolio';
    } else if (path.includes('contact.html')) {
        return 'contact';
    }
    return 'portfolio'; // Default to portfolio if no match
}

// Show the current page content and update active state
function showCurrentPage() {
    const currentPage = getCurrentPage();
    
    // Hide all content divs
    document.querySelectorAll('.content > div').forEach(div => {
        div.style.display = 'none';
    });
    
    // Show the current page content
    document.getElementById(currentPage + '-content').style.display = 'block';
    
    // Update active class in navigation
    document.querySelectorAll('nav ul li').forEach(li => {
        li.classList.remove('active');
    });
    
    // Find and set active link
    const activeLink = document.getElementById(currentPage + '-link');
    if (activeLink) {
        activeLink.parentElement.classList.add('active');
    }
}

// Handle navigation clicks
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the page ID from the link's ID
        const pageId = this.id.replace('-link', '');
        
        // Update URL without refreshing page if we're in a GitHub Pages environment
        if (window.location.hostname.includes('github.io')) {
            const repoName = window.location.pathname.split('/')[1];
            window.history.pushState({}, '', `/${repoName}/${pageId}.html`);
        } else {
            window.history.pushState({}, '', `${pageId}.html`);
        }
        
        showCurrentPage();
    });
});

// Initialize page on load
window.addEventListener('load', showCurrentPage);

// Handle back/forward navigation
window.addEventListener('popstate', showCurrentPage);
