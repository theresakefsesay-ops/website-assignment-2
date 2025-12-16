// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
   
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
   
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
   
    // Player filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const playerCards = document.querySelectorAll('.player-card[data-position]');
    const playerSearch = document.getElementById('playerSearch');
   
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
               
                // Add active class to clicked button
                this.classList.add('active');
               
                const filterValue = this.getAttribute('data-filter');
               
                // Filter player cards
                playerCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-position') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
   
    // Player search functionality
    if (playerSearch) {
        playerSearch.addEventListener('keyup', function() {
            const searchValue = this.value.toLowerCase();
           
            playerCards.forEach(card => {
                const playerName = card.getAttribute('data-name').toLowerCase();
                if (playerName.includes(searchValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
   
    // Matches tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
   
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
               
                // Add active class to clicked button
                this.classList.add('active');
               
                // Show corresponding content
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
   
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
           
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const injury = document.getElementById('injury').checked;
           
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
           
            // In a real application, you would send this data to a server
            // For this prototype, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
           
            // Reset form
            contactForm.reset();
        });
    }
   
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinksAll = document.querySelectorAll('.nav-menu a');
   
    navLinksAll.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});
