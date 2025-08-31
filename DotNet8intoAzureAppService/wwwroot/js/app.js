// Main application JavaScript for Taste of Thrissur - Fixed Version

// Page navigation system - Fixed implementation
function showPage(pageId) {
    console.log('Navigating to page:', pageId); // Debug log
    
    // Hide main content and all pages
    const mainContent = document.getElementById('main-content');
    const allPages = document.querySelectorAll('.page-content');
    
    if (pageId === 'home') {
        // Show main content, hide all pages
        if (mainContent) {
            mainContent.style.display = 'block';
        }
        allPages.forEach(page => page.classList.add('hidden'));
    } else {
        // Hide main content, show specific page
        if (mainContent) {
            mainContent.style.display = 'none';
        }
        allPages.forEach(page => page.classList.add('hidden'));
        
        const targetPage = document.getElementById(`${pageId}-page`);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            // Load content if needed
            loadPageContent(pageId);
        }
    }
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scrolling for anchor links - Fixed implementation
function scrollToSection(sectionId) {
    console.log('Scrolling to section:', sectionId); // Debug log
    
    const element = document.getElementById(sectionId);
    if (element) {
        // Make sure main content is visible first
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.style.display = 'block';
        }
        
        // Hide all pages
        const allPages = document.querySelectorAll('.page-content');
        allPages.forEach(page => page.classList.add('hidden'));
        
        // Smooth scroll to the element
        setTimeout(() => {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    }
}

// Enhanced page content for different sections
const pageContent = {
    'about': {
        title: 'Our Heritage Story',
        content: `
            <div class="about-content" style="max-width: 800px; margin: 0 auto;">
                <div class="heritage-story">
                    <h2>The Soul of Kerala Hospitality</h2>
                    <p>Founded on the timeless principle of <strong>Atithi Devo Bhava</strong>, Taste of Thrissur emerged from a deep passion to preserve and share Kerala's rich culinary heritage. Our journey began with a simple belief: that food is not just nourishment, but a bridge connecting cultures, generations, and hearts.</p>
                    
                    <div class="story-section" style="margin: 24px 0; padding: 20px; background: var(--color-bg-3); border-radius: var(--radius-base);">
                        <h3 style="color: var(--color-primary);">Our Cultural Mission</h3>
                        <p>We are guardians of ancient recipes passed down through generations of Malayali families. Each dish we serve carries within it the stories of spice merchants, royal kitchens, and humble homes where love was the secret ingredient. Our kitchen is a temple where traditional cooking methods meet contemporary presentation.</p>
                    </div>
                    
                    <div class="story-section" style="margin: 24px 0; padding: 20px; background: var(--color-bg-2); border-radius: var(--radius-base);">
                        <h3 style="color: var(--color-primary);">Traditional Cooking Philosophy</h3>
                        <p>In our kitchen, we honor the <em>Uruli</em> (traditional bronze vessels), the <em>Appa Chatti</em> (clay pans), and the aromatic dance of curry leaves with coconut oil. We source our spices directly from Kerala's plantations, ensuring that every grain of pepper, every pod of cardamom carries the essence of our motherland.</p>
                    </div>
                    
                    <div class="story-section" style="margin: 24px 0; padding: 20px; background: var(--color-bg-1); border-radius: var(--radius-base);">
                        <h3 style="color: var(--color-primary);">Community & Culture</h3>
                        <p>Our restaurant is more than a dining space - it's a cultural center where the spirit of Kerala comes alive. From the gentle rustle of banana leaves to the warm glow of traditional <em>Nilavilakku</em> lamps, every element has been carefully chosen to create an authentic Malayalam experience.</p>
                    </div>
                </div>
                
                <div class="values-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: 32px;">
                    <div class="value-card" style="background: var(--color-surface); padding: 16px; border-radius: var(--radius-base); border: 1px solid var(--color-card-border);">
                        <h4 style="color: var(--color-primary); margin-bottom: 8px;">Authenticity</h4>
                        <p>Every recipe is prepared using traditional methods and original spice blends</p>
                    </div>
                    <div class="value-card" style="background: var(--color-surface); padding: 16px; border-radius: var(--radius-base); border: 1px solid var(--color-card-border);">
                        <h4 style="color: var(--color-primary); margin-bottom: 8px;">Hospitality</h4>
                        <p>Treating every guest with the warmth and respect of Kerala's age-old traditions</p>
                    </div>
                    <div class="value-card" style="background: var(--color-surface); padding: 16px; border-radius: var(--radius-base); border: 1px solid var(--color-card-border);">
                        <h4 style="color: var(--color-primary); margin-bottom: 8px;">Heritage</h4>
                        <p>Preserving and celebrating the rich culinary culture of God's Own Country</p>
                    </div>
                    <div class="value-card" style="background: var(--color-surface); padding: 16px; border-radius: var(--radius-base); border: 1px solid var(--color-card-border);">
                        <h4 style="color: var(--color-primary); margin-bottom: 8px;">Quality</h4>
                        <p>Using only the finest ingredients sourced from trusted Kerala suppliers</p>
                    </div>
                </div>
            </div>
        `
    },
    'cultural-heritage': {
        title: "Thrissur's Cultural Legacy",
        content: `
            <div class="heritage-content" style="max-width: 800px; margin: 0 auto;">
                <div class="heritage-intro">
                    <h2>The Cultural Capital of Kerala</h2>
                    <p>Thrissur, known as the cultural capital of Kerala, is a city where ancient traditions seamlessly blend with vibrant celebrations. Our restaurant draws inspiration from this rich heritage, bringing the essence of Thrissur's cultural magnificence to your dining experience.</p>
                </div>
                
                <div class="heritage-sections" style="margin-top: 32px;">
                    <div class="heritage-item" style="margin: 24px 0; padding: 20px; background: var(--color-bg-4); border-radius: var(--radius-base);">
                        <h3 style="color: var(--color-primary);">Thrissur Pooram - The Mother of All Festivals</h3>
                        <p>The spectacular Thrissur Pooram, held annually at the Vadakkunnathan Temple, is not just a festival but a celebration of Kerala's artistic excellence. The thundering drums, majestic elephants, and dazzling fireworks create an atmosphere of divine celebration. Our festival menu during Pooram season recreates this magical experience through specially prepared traditional delicacies.</p>
                    </div>
                    
                    <div class="heritage-item" style="margin: 24px 0; padding: 20px; background: var(--color-bg-5); border-radius: var(--radius-base);">
                        <h3 style="color: var(--color-primary);">Classical Arts & Performance</h3>
                        <p><strong>Kathakali:</strong> The classical dance-drama that tells epic stories through elaborate makeup, costumes, and expressions. Our restaurant occasionally hosts Kathakali performances during special cultural evenings.</p>
                        <p><strong>Mohiniyattam:</strong> The graceful dance form that embodies the feminine divine, as gentle and flowing as the backwaters of Kerala.</p>
                        <p><strong>Classical Music:</strong> The soul-stirring ragas that have echoed through Kerala's temples and homes for centuries.</p>
                    </div>
                    
                    <div class="heritage-item" style="margin: 24px 0; padding: 20px; background: var(--color-bg-6); border-radius: var(--radius-base);">
                        <h3 style="color: var(--color-primary);">Vadakkunnathan Temple - The Sacred Heart</h3>
                        <p>Our location near the ancient Vadakkunnathan Temple connects us directly to Thrissur's spiritual heritage. This Shiva temple, with its classic Kerala architecture, has been the center of the city's cultural and religious life for over a millennium. The temple's influence permeates our cooking philosophy, where preparation of food is treated as a sacred offering.</p>
                    </div>
                </div>
            </div>
        `
    },
    'menu-categories': {
        title: 'Complete Menu Experience',
        content: `
            <div class="full-menu" style="max-width: 900px; margin: 0 auto;">
                <div class="menu-intro-text">
                    <h2>A Culinary Journey Through Kerala</h2>
                    <p>Each section of our menu represents a different aspect of Kerala's rich culinary heritage, from festival feasts to everyday comfort foods, from coastal delicacies to spice-rich curries.</p>
                </div>
                
                <div class="menu-section-detailed" style="margin: 32px 0; padding: 24px; background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-card-border);">
                    <h3 style="color: var(--color-primary); margin-bottom: 16px;">Traditional Sadya - The Royal Feast</h3>
                    <p class="menu-description">The Sadya is Kerala's most celebrated meal, traditionally served during Onam and other auspicious occasions. Our authentic Sadya includes:</p>
                    <div class="menu-items-detailed" style="margin-top: 20px;">
                        <div class="menu-row" style="margin: 16px 0; padding: 12px; background: var(--color-bg-1); border-radius: var(--radius-base);">
                            <h4 style="color: var(--color-text); margin-bottom: 8px;">Complete Onam Sadya - ₹350</h4>
                            <p>24+ traditional dishes including sambar, rasam, avial, payasam, served on banana leaf</p>
                        </div>
                    </div>
                </div>
                
                <div class="menu-section-detailed" style="margin: 32px 0; padding: 24px; background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-card-border);">
                    <h3 style="color: var(--color-primary); margin-bottom: 16px;">Malabar Coast Specialties</h3>
                    <div class="menu-items-detailed">
                        <div class="menu-item-full" style="margin: 12px 0; padding: 16px; background: var(--color-bg-8); border-radius: var(--radius-base); display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h4 style="margin: 0 0 8px 0;">Karimeen Pollichathu</h4>
                                <p style="margin: 0; font-size: 14px; color: var(--color-text-secondary);">Pearl spot fish marinated in spices, wrapped in banana leaf</p>
                            </div>
                            <span class="price" style="font-weight: bold; color: var(--color-primary);">₹450</span>
                        </div>
                        <div class="menu-item-full" style="margin: 12px 0; padding: 16px; background: var(--color-bg-8); border-radius: var(--radius-base); display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h4 style="margin: 0 0 8px 0;">Meen Moilee</h4>
                                <p style="margin: 0; font-size: 14px; color: var(--color-text-secondary);">Fish curry in coconut milk with traditional spices</p>
                            </div>
                            <span class="price" style="font-weight: bold; color: var(--color-primary);">₹380</span>
                        </div>
                    </div>
                </div>
                
                <div class="menu-section-detailed" style="margin: 32px 0; padding: 24px; background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-card-border);">
                    <h3 style="color: var(--color-primary); margin-bottom: 16px;">Traditional Beverages</h3>
                    <div class="menu-items-detailed">
                        <div class="menu-item-full" style="margin: 12px 0; padding: 16px; background: var(--color-bg-2); border-radius: var(--radius-base); display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h4 style="margin: 0 0 8px 0;">Kerala Spiced Tea</h4>
                                <p style="margin: 0; font-size: 14px; color: var(--color-text-secondary);">Traditional tea with cardamom and spices</p>
                            </div>
                            <span class="price" style="font-weight: bold; color: var(--color-primary);">₹40</span>
                        </div>
                        <div class="menu-item-full" style="margin: 12px 0; padding: 16px; background: var(--color-bg-2); border-radius: var(--radius-base); display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h4 style="margin: 0 0 8px 0;">Fresh Coconut Water</h4>
                                <p style="margin: 0; font-size: 14px; color: var(--color-text-secondary);">Traditional welcome drink in coconut shell</p>
                            </div>
                            <span class="price" style="font-weight: bold; color: var(--color-primary);">₹60</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'contact': {
        title: 'Visit Our Cultural Haven',
        content: `
            <div class="contact-details" style="max-width: 800px; margin: 0 auto;">
                <div class="contact-main">
                    <h2>Plan Your Kerala Experience</h2>
                    <p>Located in the heart of Thrissur's cultural district, we invite you to experience authentic Kerala hospitality in our traditionally designed restaurant.</p>
                    
                    <div class="contact-info-detailed" style="display: grid; gap: 24px; margin-top: 32px;">
                        <div class="contact-card" style="background: var(--color-surface); padding: 20px; border-radius: var(--radius-base); border: 1px solid var(--color-card-border);">
                            <h3 style="color: var(--color-primary); margin-bottom: 12px;">Location & Directions</h3>
                            <p><strong>Address:</strong> Near Vadakkunnathan Temple<br>
                            MG Road, Thrissur<br>
                            Kerala 680001, India</p>
                            <p style="color: var(--color-orange-500); font-style: italic;"><strong>Landmarks:</strong> 5 minutes walk from Thrissur Railway Station</p>
                        </div>
                        
                        <div class="contact-card" style="background: var(--color-surface); padding: 20px; border-radius: var(--radius-base); border: 1px solid var(--color-card-border);">
                            <h3 style="color: var(--color-primary); margin-bottom: 12px;">Reservations & Contact</h3>
                            <p><strong>Phone:</strong> +91 98765 43210<br>
                            <strong>Email:</strong> namaste@tasteofthrissur.com</p>
                            <p style="color: var(--color-orange-500);"><strong>For Group Bookings:</strong> events@tasteofthrissur.com</p>
                        </div>
                        
                        <div class="contact-card" style="background: var(--color-surface); padding: 20px; border-radius: var(--radius-base); border: 1px solid var(--color-card-border);">
                            <h3 style="color: var(--color-primary); margin-bottom: 12px;">Operating Hours</h3>
                            <p><strong>Daily:</strong> 11:00 AM - 10:00 PM<br>
                            <strong>Special Sadya:</strong> Weekends 12:00 PM - 3:00 PM<br>
                            <strong>Festival Days:</strong> Extended hours with special menus</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'catering': {
        title: 'Cultural Events & Catering',
        content: `
            <div class="catering-content" style="max-width: 800px; margin: 0 auto;">
                <div class="catering-intro">
                    <h2>Bringing Kerala's Hospitality to Your Celebrations</h2>
                    <p>From intimate family gatherings to grand weddings, we bring the authentic taste of Kerala and the warmth of traditional hospitality to your special occasions.</p>
                </div>
                
                <div class="catering-services" style="margin-top: 32px;">
                    <div class="service-category" style="margin: 24px 0; padding: 20px; background: var(--color-bg-3); border-radius: var(--radius-base);">
                        <h3 style="color: var(--color-primary);">Traditional Wedding Catering</h3>
                        <p>Celebrate your special day with authentic Kerala cuisine:</p>
                        <ul style="margin-left: 20px;">
                            <li>Complete Sadya service for 50-5000 guests</li>
                            <li>Traditional banana leaf service</li>
                            <li>Custom menu planning</li>
                            <li>Professional service team in traditional attire</li>
                        </ul>
                    </div>
                    
                    <div class="service-category" style="margin: 24px 0; padding: 20px; background: var(--color-bg-4); border-radius: var(--radius-base);">
                        <h3 style="color: var(--color-primary);">Festival & Religious Celebrations</h3>
                        <p>Honor traditions with our specialized festival menus:</p>
                        <ul style="margin-left: 20px;">
                            <li>Onam Sadya celebrations</li>
                            <li>Vishu special arrangements</li>
                            <li>Temple festival catering</li>
                            <li>Custom vegetarian menus</li>
                        </ul>
                    </div>
                </div>
                
                <div class="catering-packages" style="margin-top: 32px;">
                    <h3 style="color: var(--color-primary);">Sample Packages</h3>
                    <div class="package-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin-top: 20px;">
                        <div class="package-card" style="background: var(--color-surface); padding: 20px; border-radius: var(--radius-base); border: 1px solid var(--color-card-border); text-align: center;">
                            <h4 style="color: var(--color-primary);">Traditional Sadya</h4>
                            <p>Complete 24-dish vegetarian feast</p>
                            <span class="package-price" style="font-size: 18px; font-weight: bold; color: var(--color-orange-500);">₹350 per person</span>
                            <p class="package-note" style="font-size: 12px; color: var(--color-text-secondary);">Minimum 25 guests</p>
                        </div>
                        <div class="package-card" style="background: var(--color-surface); padding: 20px; border-radius: var(--radius-base); border: 1px solid var(--color-card-border); text-align: center;">
                            <h4 style="color: var(--color-primary);">Premium Experience</h4>
                            <p>Full service with entertainment</p>
                            <span class="package-price" style="font-size: 18px; font-weight: bold; color: var(--color-orange-500);">₹650 per person</span>
                            <p class="package-note" style="font-size: 12px; color: var(--color-text-secondary);">Includes performances</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

// Function to load detailed page content - Fixed
function loadPageContent(pageId) {
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage && pageContent[pageId]) {
        const container = targetPage.querySelector('.container');
        if (container) {
            container.innerHTML = `
                <h1>${pageContent[pageId].title}</h1>
                ${pageContent[pageId].content}
                <div class="page-navigation" style="text-align: center; margin-top: 40px;">
                    <button class="btn btn--secondary" onclick="showPage('home')">← Back to Home</button>
                </div>
            `;
        }
    }
}

// Initialize page content when DOM is loaded - Enhanced
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing Taste of Thrissur app');
    
    // Load content for all pages
    Object.keys(pageContent).forEach(pageId => {
        loadPageContent(pageId);
    });
    
    // Enhanced navigation event listeners
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                // Handle anchor links
                const targetId = href.slice(1);
                scrollToSection(targetId);
            } else {
                // Handle onclick functions that might be present
                const onclick = this.getAttribute('onclick');
                if (onclick) {
                    eval(onclick);
                }
            }
        });
    });
    
    // Fix logo/home navigation
    const logoElements = document.querySelectorAll('.nav-logo, .nav-logo-text');
    logoElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('click', function() {
            showPage('home');
        });
    });
    
    // Enhanced button functionality
    const heroButton = document.querySelector('.hero-cta');
    if (heroButton) {
        heroButton.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('cultural-welcome');
        });
    }
    
    // Fix all navigation buttons
    document.addEventListener('click', function(e) {
        // Handle dynamically loaded "Back to Home" buttons
        if (e.target.textContent.includes('Back to Home') || e.target.textContent.includes('← Back to Home')) {
            e.preventDefault();
            showPage('home');
        }
        
        // Handle "Explore Full Menu" buttons
        if (e.target.textContent.includes('Explore Full Menu')) {
            e.preventDefault();
            showPage('menu-categories');
        }
    });
    
    // Add fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add interactive effects
    const interactiveElements = document.querySelectorAll('.heritage-card, .hospitality-card, .menu-item');
    interactiveElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    console.log('Taste of Thrissur app initialized successfully');
});

// Additional utility functions
function toggleMobileNav() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('mobile-active');
    }
}

function searchMenu(searchTerm) {
    const menuItems = document.querySelectorAll('.menu-item, .menu-category');
    const term = searchTerm.toLowerCase();
    
    menuItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(term)) {
            item.style.display = 'block';
            item.style.backgroundColor = term ? 'rgba(var(--color-teal-300-rgb), 0.1)' : '';
        } else {
            item.style.display = term ? 'none' : 'block';
        }
    });
}

// Cultural greeting functionality
function showCulturalGreeting() {
    const greetings = [
        'നമസ്കാരം (Namaskaram) - Greetings in Malayalam',
        'आतिथि देवो भवः (Atithi Devo Bhava) - The Guest is God',
        'स्वागतम् (Swagatam) - Welcome in Sanskrit'
    ];
    
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    
    // Create a more elegant notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-primary);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-size: 14px;
        max-width: 300px;
    `;
    notification.textContent = randomGreeting;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// Export functions for global access
window.tasteOfThrissur = {
    showPage,
    scrollToSection,
    toggleMobileNav,
    searchMenu,
    showCulturalGreeting,
    loadPageContent
};