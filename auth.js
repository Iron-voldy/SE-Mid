class AuthManager {
    constructor() {
        this.init();
    }

    init() {
        this.checkAuthentication();
        this.bindEvents();
    }

    checkAuthentication() {
        const isAuthenticated = sessionStorage.getItem('quizAuthenticated');
        const loginTime = sessionStorage.getItem('loginTime');
        
        if (!isAuthenticated || isAuthenticated !== 'true') {
            this.redirectToLogin();
            return;
        }
        
        if (loginTime) {
            const currentTime = new Date().getTime();
            const timeDifference = currentTime - parseInt(loginTime);
            
            // Session expires after 2 hours (7200000 milliseconds)
            if (timeDifference >= 7200000) {
                this.logout('Session expired. Please login again.');
                return;
            }
        }
        
        // If we reach here, user is authenticated
        this.showAuthenticatedContent();
    }

    bindEvents() {
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }
    }

    showAuthenticatedContent() {
        // Update welcome message
        const welcomeMessage = document.getElementById('welcomeMessage');
        if (welcomeMessage) {
            const loginTime = sessionStorage.getItem('loginTime');
            if (loginTime) {
                const loginDate = new Date(parseInt(loginTime));
                const timeString = loginDate.toLocaleTimeString();
                welcomeMessage.textContent = `Logged in at ${timeString}`;
            }
        }
        
        // Show the main content (it's already visible by default)
        document.body.style.display = 'block';
    }

    redirectToLogin() {
        // Hide the main content immediately
        document.body.style.display = 'none';
        
        // Redirect to login page
        window.location.href = 'login.html';
    }

    logout(message = null) {
        // Clear session storage
        sessionStorage.removeItem('quizAuthenticated');
        sessionStorage.removeItem('loginTime');
        
        // If there's a message, store it to show on login page
        if (message) {
            sessionStorage.setItem('logoutMessage', message);
        }
        
        // Redirect to login
        this.redirectToLogin();
    }

    // Method to extend session (call this periodically during quiz)
    extendSession() {
        const isAuthenticated = sessionStorage.getItem('quizAuthenticated');
        if (isAuthenticated === 'true') {
            sessionStorage.setItem('loginTime', new Date().getTime().toString());
        }
    }
}

// Initialize authentication when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    new AuthManager();
});

// Extend session every 30 minutes during active use
setInterval(() => {
    const authManager = new AuthManager();
    authManager.extendSession();
}, 1800000); // 30 minutes

// Handle page visibility changes to extend session when user returns
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        const authManager = new AuthManager();
        authManager.extendSession();
    }
});