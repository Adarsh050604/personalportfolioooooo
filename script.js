document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor effect
    const cursor = document.querySelector('.cursor-effect');
    
    if (cursor) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.display = 'block';
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        document.addEventListener('mouseout', function() {
            cursor.style.display = 'none';
        });
    }
    
    // Animate skills progress bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillBars.length > 0) {
        // Initially set width to 0
        skillBars.forEach(bar => {
            bar.style.width = '0';
        });
        
        // Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Function to animate skill bars
        function animateSkillBars() {
            skillBars.forEach(bar => {
                if (isInViewport(bar)) {
                    const width = bar.parentElement.previousElementSibling.querySelector('.skill-percentage').textContent;
                    bar.style.width = width;
                }
            });
        }
        
        // Run animation on page load
        setTimeout(animateSkillBars, 500);
        
        // Run animation on scroll
        window.addEventListener('scroll', animateSkillBars);
    }
    
    // Animate particles
    const particles = document.querySelectorAll('.particle');
    
    if (particles.length > 0) {
        // Randomly position particles initially
        particles.forEach(particle => {
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            particle.style.left = `${randomX}px`;
            particle.style.top = `${randomY}px`;
        });
    }
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-item, .info-item, .skill-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    // Add animation class for styles
    const style = document.createElement('style');
    style.innerHTML = `
        .timeline-item, .info-item, .skill-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animated {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Run animation on page load and scroll
    setTimeout(animateOnScroll, 300);
    window.addEventListener('scroll', animateOnScroll);
    
    // Add hover effect to navigation items
    const navItems = document.querySelectorAll('nav ul li a');
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.paddingLeft = '35px';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.paddingLeft = '';
        });
    });
    
    // Calculate and display age based on birthdate
    const ageElement = document.querySelector('.info-item:nth-child(2) .info-value');
    
    if (ageElement) {
        const birthDateStr = document.querySelector('.info-item:nth-child(1) .info-value').textContent;
        const birthDate = new Date(birthDateStr);
        const today = new Date();
        
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        ageElement.textContent = age;
    }
});