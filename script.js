window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
    
    setTimeout(() => {
        document.querySelector('.header').style.animation = 'fadeIn 1s ease-out';
        document.querySelector('.buttons-container').style.animation = 'slideUp 1s ease-out';
        document.querySelector('.footer').style.animation = 'fadeIn 1.5s ease-out';
    }, 500);
});

document.addEventListener('mousemove', (e) => {
    const circles = document.querySelectorAll('.bg-circle');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.5;
        const moveX = (x - 0.5) * 20 * speed;
        const moveY = (y - 0.5) * 20 * speed;
        
        circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

document.querySelectorAll('.btn').forEach((btn, index) => {
    btn.style.animationDelay = `${index * 0.2}s`;
});

const supportBtn = document.querySelector('.support-btn');
supportBtn.addEventListener('mouseenter', () => {
    supportBtn.innerHTML = '<i class="fas fa-heart"></i> Thank you!';
    supportBtn.style.background = 'linear-gradient(135deg, #ff4b2b, #ff416c)';
});

supportBtn.addEventListener('mouseleave', () => {
    supportBtn.innerHTML = '<i class="fas fa-hand-holding-heart"></i> Support';
    supportBtn.style.background = 'linear-gradient(135deg, #ff416c, #ff4b2b)';
});
