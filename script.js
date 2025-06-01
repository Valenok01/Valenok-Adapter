window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
    
    setTimeout(() => {
        document.querySelector('.header').style.animation = 'fadeIn 1s ease-out';
        document.querySelector('.buttons-container').style.animation = 'slideUp 1s ease-out';
        document.querySelector('.footer').style.animation = 'fadeIn 1.5s ease-out';
        document.querySelector('.feedback-section').style.animation = 'fadeIn 1.5s ease-out';
    }, 500);
    
    initFeedbackSystem();
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

function initFeedbackSystem() {
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const likeCount = document.getElementById('likeCount');
    const dislikeCount = document.getElementById('dislikeCount');
    
    let feedbackData = JSON.parse(localStorage.getItem('siteFeedback')) || {
        likes: 0,
        dislikes: 0,
        userVote: null
    };
    
    likeCount.textContent = feedbackData.likes;
    dislikeCount.textContent = feedbackData.dislikes;
    
    if (feedbackData.userVote === 'like') {
        likeBtn.classList.add('active');
    } else if (feedbackData.userVote === 'dislike') {
        dislikeBtn.classList.add('active');
    }
    
    likeBtn.addEventListener('click', () => {
        if (feedbackData.userVote === 'like') {
            feedbackData.likes--;
            feedbackData.userVote = null;
            likeBtn.classList.remove('active');
        } else if (feedbackData.userVote === 'dislike') {
            feedbackData.dislikes--;
            feedbackData.likes++;
            feedbackData.userVote = 'like';
            dislikeBtn.classList.remove('active');
            likeBtn.classList.add('active');
        } else {
            feedbackData.likes++;
            feedbackData.userVote = 'like';
            likeBtn.classList.add('active');
        }
        
        likeBtn.querySelector('i').style.transform = 'scale(1.5)';
        setTimeout(() => {
            likeBtn.querySelector('i').style.transform = 'scale(1)';
        }, 300);
        
        localStorage.setItem('siteFeedback', JSON.stringify(feedbackData));
        likeCount.textContent = feedbackData.likes;
        dislikeCount.textContent = feedbackData.dislikes;
    });
    
    dislikeBtn.addEventListener('click', () => {
        if (feedbackData.userVote === 'dislike') {
            feedbackData.dislikes--;
            feedbackData.userVote = null;
            dislikeBtn.classList.remove('active');
        } else if (feedbackData.userVote === 'like') {
            feedbackData.likes--;
            feedbackData.dislikes++;
            feedbackData.userVote = 'dislike';
            likeBtn.classList.remove('active');
            dislikeBtn.classList.add('active');
        } else {
            feedbackData.dislikes++;
            feedbackData.userVote = 'dislike';
            dislikeBtn.classList.add('active');
        }
        
        dislikeBtn.querySelector('i').style.transform = 'scale(1.5)';
        setTimeout(() => {
            dislikeBtn.querySelector('i').style.transform = 'scale(1)';
        }, 300);
        
        localStorage.setItem('siteFeedback', JSON.stringify(feedbackData));
        likeCount.textContent = feedbackData.likes;
        dislikeCount.textContent = feedbackData.dislikes;
    });
}