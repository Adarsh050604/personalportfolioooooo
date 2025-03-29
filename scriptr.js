// Theme switcher
function setThemeColor(primary, secondary, tertiary) {
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--secondary', secondary);
    document.documentElement.style.setProperty('--tertiary', tertiary);
    
    // Update theme buttons active state
    const themeButtons = document.querySelectorAll('.theme-button');
    themeButtons.forEach(button => {
        button.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

// Toggle service description
function toggleDescription(element) {
    const isActive = element.classList.contains('active');
    
    // Close all open service boxes
    document.querySelectorAll('.service-box').forEach(box => {
        box.classList.remove('active');
    });
    
    // If the clicked box wasn't active, make it active
    if (!isActive) {
        element.classList.add('active');
    }
}

// Redirect to contact page
function redirectToContact(event) {
    event.stopPropagation();
    window.location.href = "contact.html";
}

// Show success message
function showSuccessMessage() {
    const successMessage = document.getElementById('success-message');
    successMessage.classList.add('show');
    
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
}

// Custom cursor effect
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor-effect');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
    
    document.addEventListener('mouseup', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    document.querySelectorAll('a, button, .service-box, .theme-button').forEach(item => {
        item.addEventListener('mouseenter', function() {
            cursor.style.width = '60px';
            cursor.style.height = '60px';
            cursor.style.border = '2px solid var(--secondary)';
        });
        
        item.addEventListener('mouseleave', function() {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.border = '2px solid var(--primary)';
        });
    });
    
    // Set the first theme button as active by default
    document.querySelector('.theme-button').classList.add('active');
});