class QuizApp {
    constructor() {
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.quizStarted = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateQuizInfo();
    }

    bindEvents() {
        document.getElementById('quizSelect').addEventListener('change', () => this.updateQuizInfo());
        document.getElementById('startQuiz').addEventListener('click', () => this.startQuiz());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prevBtn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('submitBtn').addEventListener('click', () => this.submitQuiz());
        document.getElementById('restartBtn').addEventListener('click', () => this.restartQuiz());
        document.getElementById('reviewBtn').addEventListener('click', () => this.reviewAnswers());
    }

    updateQuizInfo() {
        const quizIndex = document.getElementById('quizSelect').value;
        const quiz = quizData[quizIndex];
        
        document.getElementById('quizTitle').textContent = quiz.title;
        document.getElementById('quizInstructions').textContent = quiz.instructions;
        document.getElementById('totalQuestions').textContent = quiz.questions.length;
    }

    startQuiz() {
        const quizIndex = document.getElementById('quizSelect').value;
        this.currentQuiz = quizData[quizIndex];
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.currentQuiz.questions.length).fill(null);
        this.score = 0;
        this.quizStarted = true;

        document.getElementById('quizIntro').classList.add('hidden');
        document.getElementById('quizContainer').classList.remove('hidden');
        
        this.displayQuestion();
        this.updateProgress();
        this.updateNavigationButtons();
    }

    displayQuestion() {
        const question = this.currentQuiz.questions[this.currentQuestionIndex];
        
        document.getElementById('questionText').textContent = question.question;
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuizQuestions').textContent = this.currentQuiz.questions.length;
        
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            
            optionElement.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionElement);
        });

        // Restore previous selection if exists
        if (this.userAnswers[this.currentQuestionIndex] !== null) {
            const selectedIndex = this.userAnswers[this.currentQuestionIndex];
            optionsContainer.children[selectedIndex].classList.add('selected');
        }

        // Hide feedback
        document.getElementById('questionFeedback').classList.add('hidden');
    }

    selectOption(optionIndex) {
        const optionsContainer = document.getElementById('optionsContainer');
        
        // Remove previous selection
        Array.from(optionsContainer.children).forEach(option => {
            option.classList.remove('selected');
        });
        
        // Add selection to clicked option
        optionsContainer.children[optionIndex].classList.add('selected');
        
        // Store user answer
        this.userAnswers[this.currentQuestionIndex] = optionIndex;
        
        // Show feedback immediately
        this.showFeedback(optionIndex);
        
        // Enable next button
        document.getElementById('nextBtn').disabled = false;
        
        // If this is the last question, show submit button
        if (this.currentQuestionIndex === this.currentQuiz.questions.length - 1) {
            document.getElementById('nextBtn').classList.add('hidden');
            document.getElementById('submitBtn').classList.remove('hidden');
        }
    }

    showFeedback(selectedIndex) {
        const question = this.currentQuiz.questions[this.currentQuestionIndex];
        const correctIndex = question.options.indexOf(question.correct_answer);
        const optionsContainer = document.getElementById('optionsContainer');
        const feedbackElement = document.getElementById('questionFeedback');
        const feedbackText = document.getElementById('feedbackText');
        
        // Mark correct and incorrect options
        Array.from(optionsContainer.children).forEach((option, index) => {
            if (index === correctIndex) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== correctIndex) {
                option.classList.add('incorrect');
            }
        });
        
        // Show feedback message
        if (selectedIndex === correctIndex) {
            feedbackElement.className = 'question-feedback correct';
            feedbackText.textContent = '✓ Correct! Well done.';
        } else {
            feedbackElement.className = 'question-feedback incorrect';
            feedbackText.textContent = `✗ Incorrect. The correct answer is: ${question.correct_answer}`;
        }
        
        feedbackElement.classList.remove('hidden');
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuiz.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
            this.updateProgress();
            this.updateNavigationButtons();
        }
    }

    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
            this.updateProgress();
            this.updateNavigationButtons();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.currentQuiz.questions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');
        
        prevBtn.disabled = this.currentQuestionIndex === 0;
        
        const hasAnswer = this.userAnswers[this.currentQuestionIndex] !== null;
        nextBtn.disabled = !hasAnswer;
        
        if (this.currentQuestionIndex === this.currentQuiz.questions.length - 1) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
    }

    calculateScore() {
        this.score = 0;
        this.currentQuiz.questions.forEach((question, index) => {
            const userAnswerIndex = this.userAnswers[index];
            if (userAnswerIndex !== null) {
                const userAnswer = question.options[userAnswerIndex];
                if (userAnswer === question.correct_answer) {
                    this.score++;
                }
            }
        });
    }

    submitQuiz() {
        this.calculateScore();
        this.showResults();
    }

    showResults() {
        document.getElementById('quizContainer').classList.add('hidden');
        document.getElementById('resultsContainer').classList.remove('hidden');
        
        const percentage = Math.round((this.score / this.currentQuiz.questions.length) * 100);
        
        document.getElementById('scorePercentage').textContent = `${percentage}%`;
        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('finalTotal').textContent = this.currentQuiz.questions.length;
        
        // Score message
        let message;
        if (percentage >= 90) {
            message = "Excellent! Outstanding performance!";
        } else if (percentage >= 80) {
            message = "Great job! Very good understanding!";
        } else if (percentage >= 70) {
            message = "Good work! Keep studying!";
        } else if (percentage >= 60) {
            message = "Fair attempt. More practice needed.";
        } else {
            message = "Keep studying and try again!";
        }
        
        document.getElementById('scoreMessage').textContent = message;
        
        this.displayQuestionBreakdown();
    }

    displayQuestionBreakdown() {
        const resultsContainer = document.getElementById('questionResults');
        resultsContainer.innerHTML = '';
        
        this.currentQuiz.questions.forEach((question, index) => {
            const userAnswerIndex = this.userAnswers[index];
            const isCorrect = userAnswerIndex !== null && 
                            question.options[userAnswerIndex] === question.correct_answer;
            
            const resultElement = document.createElement('div');
            resultElement.className = 'question-result';
            resultElement.innerHTML = `
                <span class="question-number">Question ${index + 1}</span>
                <span class="result-status ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </span>
            `;
            
            resultsContainer.appendChild(resultElement);
        });
    }

    restartQuiz() {
        document.getElementById('resultsContainer').classList.add('hidden');
        document.getElementById('quizIntro').classList.remove('hidden');
        
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.quizStarted = false;
        
        this.updateQuizInfo();
    }

    reviewAnswers() {
        document.getElementById('resultsContainer').classList.add('hidden');
        document.getElementById('quizContainer').classList.remove('hidden');
        
        this.currentQuestionIndex = 0;
        this.displayReviewQuestion();
        this.updateProgress();
        this.setupReviewMode();
    }

    displayReviewQuestion() {
        const question = this.currentQuiz.questions[this.currentQuestionIndex];
        
        document.getElementById('questionText').textContent = question.question;
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuizQuestions').textContent = this.currentQuiz.questions.length;
        
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        const userAnswerIndex = this.userAnswers[this.currentQuestionIndex];
        const correctIndex = question.options.indexOf(question.correct_answer);
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            
            // Add correct/incorrect classes
            if (index === correctIndex) {
                optionElement.classList.add('correct');
            } else if (index === userAnswerIndex && index !== correctIndex) {
                optionElement.classList.add('incorrect');
            }
            
            optionElement.innerHTML = `
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            
            optionsContainer.appendChild(optionElement);
        });

        // Show feedback
        const feedbackElement = document.getElementById('questionFeedback');
        const feedbackText = document.getElementById('feedbackText');
        
        if (userAnswerIndex === correctIndex) {
            feedbackElement.className = 'question-feedback correct';
            feedbackText.textContent = '✓ You answered correctly!';
        } else {
            feedbackElement.className = 'question-feedback incorrect';
            feedbackText.textContent = `✗ You selected: ${userAnswerIndex !== null ? question.options[userAnswerIndex] : 'No answer'}\nCorrect answer: ${question.correct_answer}`;
        }
        
        feedbackElement.classList.remove('hidden');
    }

    setupReviewMode() {
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const submitBtn = document.getElementById('submitBtn');
        
        // Replace next button with review navigation
        nextBtn.textContent = this.currentQuestionIndex === this.currentQuiz.questions.length - 1 ? 'Back to Results' : 'Next';
        nextBtn.disabled = false;
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
        
        // Update button event handlers for review mode
        nextBtn.onclick = () => {
            if (this.currentQuestionIndex === this.currentQuiz.questions.length - 1) {
                this.showResults();
            } else {
                this.currentQuestionIndex++;
                this.displayReviewQuestion();
                this.updateProgress();
                this.updateReviewButtons();
            }
        };
        
        prevBtn.onclick = () => {
            if (this.currentQuestionIndex > 0) {
                this.currentQuestionIndex--;
                this.displayReviewQuestion();
                this.updateProgress();
                this.updateReviewButtons();
            }
        };
        
        this.updateReviewButtons();
    }

    updateReviewButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        prevBtn.disabled = this.currentQuestionIndex === 0;
        nextBtn.textContent = this.currentQuestionIndex === this.currentQuiz.questions.length - 1 ? 'Back to Results' : 'Next';
    }
}

// Initialize the quiz app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});