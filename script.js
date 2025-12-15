document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileNavToggle = document.createElement('div');
    mobileNavToggle.className = 'mobile-nav-toggle';
    mobileNavToggle.innerHTML = '<img src="Images/menu-icon.svg" alt="Menu" class="menu-icon">';
    document.querySelector('header').appendChild(mobileNavToggle);

    mobileNavToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            this.innerHTML = '<img src="Images/menu-icon.svg" alt="Menu" class="menu-icon">';
        }
    });

    // Gallery Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Show/hide gallery items based on filter
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            
            // Clear the form
            this.reset();
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            
            this.parentNode.insertBefore(successMessage, this.nextSibling);
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }

    // Add responsive styles for mobile navigation
    const styleSheet = document.styleSheets[0];
    const mediaRule = `
    @media (max-width: 768px) {
        nav {
            display: none;
            width: 100%;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #1a1a1a;
            padding: 1rem;
            box-shadow: 0 5px 10px rgba(0,0,0,0.2);
        }
        
        nav.active {
            display: block;
        }
        
        nav ul {
            flex-direction: column;
            align-items: center;
        }
        
        nav ul li {
            margin: 0.5rem 0;
            width: 100%;
            text-align: center;
        }
        
        .mobile-nav-toggle {
            display: block;
            cursor: pointer;
            font-size: 1.5rem;
            color: #fff;
        }
    }
    
    @media (min-width: 769px) {
        .mobile-nav-toggle {
            display: none;
        }
    }`;
    
    try {
        styleSheet.insertRule(mediaRule, styleSheet.cssRules.length);
    } catch (e) {
        // If inserting the rule fails, create a new style element
        const style = document.createElement('style');
        style.textContent = mediaRule;
        document.head.appendChild(style);
    }
});