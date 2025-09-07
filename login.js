class LoginManager {
    constructor() {
        this.correctPassword = 'padarshanaukaya';
        this.init();
    }

    init() {
        this.bindEvents();
        this.checkExistingSession();
    }

    bindEvents() {
        const loginForm = document.getElementById('loginForm');
        const passwordInput = document.getElementById('password');
        
        loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        
        // Clear error message when user starts typing
        passwordInput.addEventListener('input', () => this.clearError());
        
        // Allow Enter key to submit
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleLogin(e);
            }
        });
    }

    handleLogin(e) {
        e.preventDefault();
        
        const passwordInput = document.getElementById('password');
        const loginBtn = document.querySelector('.login-btn');
        const errorMessage = document.getElementById('errorMessage');
        
        const enteredPassword = passwordInput.value.trim();
        
        // Disable button and show loading state
        loginBtn.disabled = true;
        loginBtn.textContent = 'Checking...';
        
        // Simulate a brief loading delay for better UX
        setTimeout(() => {
            if (enteredPassword === this.correctPassword) {
                this.handleSuccessfulLogin();
            } else {
                this.handleFailedLogin();
            }
            
            // Re-enable button
            loginBtn.disabled = false;
            loginBtn.textContent = 'Login';
        }, 800);
    }

    handleSuccessfulLogin() {
        const loginBox = document.querySelector('.login-box');
        
        // Add success animation
        loginBox.classList.add('success-animation');
        
        // Store authentication in session storage
        sessionStorage.setItem('quizAuthenticated', 'true');
        sessionStorage.setItem('loginTime', new Date().getTime());
        
        // Show success message
        this.showSuccessMessage();
        
        // Redirect to quiz after short delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }

    handleFailedLogin() {
        const errorMessage = document.getElementById('errorMessage');
        const passwordInput = document.getElementById('password');
        
        // Show error message
        errorMessage.classList.remove('hidden');
        
        // Clear password field
        passwordInput.value = '';
        
        // Focus back to password input
        passwordInput.focus();
        
        // Add shake animation to login box
        const loginBox = document.querySelector('.login-box');
        loginBox.style.animation = 'shake 0.5s ease-in-out';
        
        setTimeout(() => {
            loginBox.style.animation = '';
        }, 500);
    }

    clearError() {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.classList.add('hidden');
    }

    showSuccessMessage() {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.className = 'success-message';
        errorMessage.style.background = '#d4edda';
        errorMessage.style.color = '#155724';
        errorMessage.style.borderColor = '#c3e6cb';
        errorMessage.textContent = '✓ Login successful! Redirecting to quiz...';
        errorMessage.classList.remove('hidden');
    }

    checkExistingSession() {
        const isAuthenticated = sessionStorage.getItem('quizAuthenticated');
        const loginTime = sessionStorage.getItem('loginTime');
        
        if (isAuthenticated === 'true' && loginTime) {
            const currentTime = new Date().getTime();
            const timeDifference = currentTime - parseInt(loginTime);
            
            // Session expires after 2 hours (7200000 milliseconds)
            if (timeDifference < 7200000) {
                // User is already authenticated and session is valid
                window.location.href = 'index.html';
            } else {
                // Session expired, clear it
                sessionStorage.removeItem('quizAuthenticated');
                sessionStorage.removeItem('loginTime');
            }
        }
    }
}

// Add shake animation CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .success-message {
        background: #d4edda !important;
        color: #155724 !important;
        border-color: #c3e6cb !important;
    }
`;
document.head.appendChild(style);

// Initialize the login manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LoginManager();
});

// Auto-focus on password field when page loads
window.addEventListener('load', () => {
    const passwordInput = document.getElementById('password');
    passwordInput.focus();
});