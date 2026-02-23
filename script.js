'use strict';

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Validation
const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;
    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (valid) {
        // Submit form or do something
        console.log('Form submitted successfully!');
    }
});

// Menu Filtering
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-filter');
        const items = document.querySelectorAll('.menu-item');
        items.forEach(item => {
            if (item.classList.contains(category) || category === 'all') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Dynamic Content Interactions
const dynamicContent = document.querySelectorAll('.dynamic-content');
dynamicContent.forEach(content => {
    content.addEventListener('click', function() {
        this.classList.toggle('active');
        const details = this.querySelector('.details');
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});