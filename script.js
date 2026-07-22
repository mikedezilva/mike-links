import { profileData, socialLinks, featuredVideo, actionLinks, gridLinks } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Set Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Render Profile
    const profileContainer = document.getElementById('profile-container');
    profileContainer.innerHTML = `
        <div class="avatar-wrapper">
            <img src="${profileData.avatar}" alt="${profileData.name}" class="avatar" onerror="this.src='apple-touch-icon.png'">
        </div>
        <h1>${profileData.name} <i class="fa-solid fa-circle-check" style="color: #1DA1F2; margin-left: 2px; font-size: 0.85em;" title="Verified"></i></h1>
        <p>${profileData.bio}</p>
    `;

    // Render Social Icons
    const socialContainer = document.getElementById('social-container');
    socialContainer.innerHTML = socialLinks.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${link.name}">
            <i class="${link.icon}"></i>
        </a>
    `).join('');

    // Render Featured Video
    const videoContainer = document.getElementById('video-container');
    if (featuredVideo && featuredVideo.url) {
        videoContainer.innerHTML = `
            <div class="video-wrapper">
                <iframe src="${featuredVideo.url}" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>
        `;
    } else {
        videoContainer.style.display = 'none';
    }

    // Render Action Stack (Links and Dropdowns)
    const actionContainer = document.getElementById('action-container');
    actionContainer.innerHTML = actionLinks.map((item, index) => {
        if (item.type === 'dropdown') {
            const subLinksHTML = item.subLinks.map(sub => `
                <a href="${sub.url}" class="sub-link">${sub.title}</a>
            `).join('');
            
            return `
                <div class="dropdown-container" id="dropdown-${index}">
                    <button class="dropdown-toggle" aria-expanded="false" aria-controls="content-${index}">
                        <span>${item.title}</span>
                        <i class="fa-solid fa-chevron-down dropdown-icon"></i>
                    </button>
                    <div class="dropdown-content" id="content-${index}">
                        ${subLinksHTML}
                    </div>
                </div>
            `;
        } else {
            return `
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="action-btn">
                    <span>${item.title}</span>
                </a>
            `;
        }
    }).join('');

    // Attach Event Listeners for Dropdowns
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const container = this.parentElement;
            const content = this.nextElementSibling;
            
            // Toggle open class
            container.classList.toggle('open');
            
            // Handle max-height for smooth transition
            if (container.classList.contains('open')) {
                content.style.maxHeight = content.scrollHeight + "px";
                this.setAttribute('aria-expanded', 'true');
            } else {
                content.style.maxHeight = null;
                this.setAttribute('aria-expanded', 'false');
            }
        });
    });

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
