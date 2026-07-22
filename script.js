import { profileData, socialLinks, actionLinks, gridLinks } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Set Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Render Profile
    const profileContainer = document.getElementById('profile-container');
    profileContainer.innerHTML = `
        <div class="avatar-wrapper">
            <img src="${profileData.avatar}" alt="${profileData.name}" class="avatar">
        </div>
        <h1>${profileData.name}</h1>
        <p>${profileData.bio}</p>
    `;

    // Render Social Icons
    const socialContainer = document.getElementById('social-container');
    socialContainer.innerHTML = socialLinks.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${link.name}">
            <i class="${link.icon}"></i>
        </a>
    `).join('');

    // Render Action Stack
    const actionContainer = document.getElementById('action-container');
    actionContainer.innerHTML = actionLinks.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="action-btn">
            <span>${link.title}</span>
            <i class="fa-solid fa-arrow-right"></i>
        </a>
    `).join('');

    // Render Visual Grid
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = gridLinks.map(card => `
        <a href="${card.url}" target="_blank" rel="noopener noreferrer" class="grid-card">
            <span class="grid-badge">${card.badge}</span>
            <img src="${card.image}" alt="${card.title}" loading="lazy">
            <div class="grid-overlay">
                <span class="grid-title">${card.title}</span>
            </div>
        </a>
    `).join('');
});
