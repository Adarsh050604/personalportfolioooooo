document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor effect
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
    
    document.querySelectorAll('a, button, input, textarea').forEach(item => {
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

    // Check for success parameter in URL (for when returning from PHP script)
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    
    if(status === 'success') {
        document.getElementById('success-message').style.display = 'block';
        // Hide the success message after 3 seconds
        setTimeout(function() {
            document.getElementById('success-message').style.display = 'none';
        }, 3000);
    } else if(status === 'error') {
        alert('There was an error sending your message. Please try again later.');
    }
    
    // Form submit handling
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Remove the preventDefault() to allow the form to submit to the PHP script
            // e.preventDefault();
            
            // The form will now naturally submit to the action URL (send_email.php)
            // The success message will be shown when redirected back with ?status=success
        });
    }
});