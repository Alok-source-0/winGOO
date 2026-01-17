/*
 * winGOO - Main JavaScript File
 * Author: Alok Raj
 * Copyright (c) 2026 Alok Raj. All rights reserved.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation for email input
    const emailForm = document.querySelector('.cta form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!validateEmail(email)) {
                e.preventDefault();
                alert('Please enter a valid email address');
                emailInput.focus();
            }
        });
    }

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.opacity = '0.8';
        });
        button.addEventListener('mouseout', function() {
            this.style.opacity = '1';
        });
    });
});

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add to favorites function (for future use)
function addToFavorites() {
    alert('Property added to favorites!');
}

// Share property function (for future use)
function shareProperty() {
    if (navigator.share) {
        navigator.share({
            title: 'wingmo Property',
            text: 'Check out this amazing property on wingmo!',
            url: window.location.href
        });
    } else {
        alert('Property link: ' + window.location.href);
    }
}

// Scroll to top button functionality
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scrollToTopBtn');
    if (scrollButton) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
