// Cursor Glow Effect
document.addEventListener('mousemove', function(e) {
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow) {
        cursorGlow.style.left = (e.clientX - 300) + 'px';
        cursorGlow.style.top = (e.clientY - 300) + 'px';
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Typing Effect for Subtitle
const typedTextElement = document.querySelector('.typed-text');
if (typedTextElement) {
    const text = typedTextElement.textContent;
    typedTextElement.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            typedTextElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 1000);
}

// Parallax Effect for Header
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.terminal-header');
    if (header && scrolled < 1000) {
        header.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
        header.style.opacity = Math.max(0, 1 - (scrolled / 800));
    }
});

console.log('Portfolio loaded successfully!');
