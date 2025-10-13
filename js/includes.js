/**
 * TIME Coin Website - Header/Footer Includes
 * Loads reusable header and footer components
 */

// Load Header
async function loadHeader() {
    try {
        const response = await fetch('includes/header.html');
        if (!response.ok) {
          throw new Error('Failed to load header');
        }
        const html = await response.text();
        
        // Insert header at the beginning of body
        const headerContainer = document.createElement('div');
        headerContainer.innerHTML = html;
        document.body.insertBefore(headerContainer, document.body.firstChild);
        
        console.log('✅ Header loaded successfully');
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

// Load Footer
async function loadFooter() {
    try {
        const response = await fetch('includes/footer.html');
        if (!response.ok) {
          throw new Error('Failed to load footer');
        }
        const html = await response.text();
        
        // Insert footer at the end of body
        const footerContainer = document.createElement('div');
        footerContainer.innerHTML = html;
        document.body.appendChild(footerContainer);
        
        console.log('✅ Footer loaded successfully');
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Load both header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    await loadHeader();
    await loadFooter();
    
    // Highlight current page in navigation
    highlightCurrentPage();
});

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('#')[0];
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.style.color = '#667eea';
            link.style.fontWeight = '600';
        }
    });
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});