
// ===== TYPING EFFECT =====
const typingText = document.querySelector('.hero-lastname');
if (typingText) {
    const text = typingText.innerText;
    typingText.innerText = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typingText.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }
    setTimeout(typeWriter, 500);
}

// ===== GLITCH EFFECT ON HERO NAME =====
const heroFirst = document.querySelector('.hero-firstname');
if (heroFirst) {
    heroFirst.setAttribute('data-text', heroFirst.innerText);
}

// ===== AURORA BACKGROUND ON HERO =====
const canvas = document.createElement('canvas');
canvas.id = 'aurora';
document.querySelector('.hero').prepend(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let time = 0;
function drawAurora() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 5; i++) {
        const gradient = ctx.createRadialGradient(
            canvas.width * (0.2 + i * 0.15 + Math.sin(time + i) * 0.1),
            canvas.height * (0.3 + Math.cos(time * 0.7 + i) * 0.2),
            0,
            canvas.width * (0.2 + i * 0.15),
            canvas.height * 0.5,
            canvas.width * 0.4
        );
        gradient.addColorStop(0, `rgba(${i % 2 === 0 ? '79,195,247' : '103,58,183'}, 0.08)`);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    time += 0.005;
    requestAnimationFrame(drawAurora);
}
drawAurora();

// ===== TILT EFFECT ON CARDS =====
document.querySelectorAll('.project-card, .education-card, .contact-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        card.style.transition = 'transform 0.5s ease';
    });
});

// ===== COUNTER ANIMATION ON SKILL BARS =====
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.skill-fill');
            if (fill) {
                const width = fill.style.width;
                fill.style.width = '0%';
                setTimeout(() => {
                    fill.style.transition = 'width 1.5s ease';
                    fill.style.width = width;
                }, 200);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-item').forEach(el => skillObserver.observe(el));


// ===== MAGNETIC EFFECT ON NAV LINKS =====
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        link.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translate(0, 0)';
        link.style.transition = 'transform 0.3s ease';
    });
});

// ===== CURSOR GLOW EFFECT =====
const cursor = document.createElement('div');
cursor.classList.add('cursor-glow');
document.body.appendChild(cursor);
const cursorDot = document.createElement('div');
cursorDot.classList.add('cursor-dot');
document.body.appendChild(cursorDot);

let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
});

function animateCursor() {
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;
    cursor.style.left = `${glowX}px`;
    cursor.style.top = `${glowY}px`;
    requestAnimationFrame(animateCursor);
}
animateCursor();

// ===== SECTION REVEAL WITH DIFFERENT ANIMATIONS =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.1 });

// About - slide from left
document.querySelectorAll('.about-text').forEach(el => {
    el.classList.add('slide-left');
    revealObserver.observe(el);
});
document.querySelectorAll('.about-image').forEach(el => {
    el.classList.add('slide-right');
    revealObserver.observe(el);
});

// Resume - fade up
document.querySelectorAll('.resume-col').forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${i * 0.2}s`;
    revealObserver.observe(el);
});

// Projects - zoom in
document.querySelectorAll('.project-card').forEach((el, i) => {
    el.classList.add('zoom-in');
    el.style.transitionDelay = `${i * 0.1}s`;
    revealObserver.observe(el);
});

// Education - slide from right
document.querySelectorAll('.education-card').forEach((el, i) => {
    el.classList.add('slide-right');
    el.style.transitionDelay = `${i * 0.1}s`;
    revealObserver.observe(el);
});

// Contact - fade up
document.querySelectorAll('.contact-item, .contact-form').forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${i * 0.1}s`;
    revealObserver.observe(el);
});

// ===== NAVBAR ACTIVE ON SCROLL =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});