import { profileData, socialLinks, featuredVideo, actionLinks, musicLinks, bannerButton } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Force scroll to top on load
    window.scrollTo(0, 0);

    // Set Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Render Banner Button
    const bannerWrapper = document.querySelector('.banner-wrapper');
    if (bannerWrapper && bannerButton && bannerButton.text) {
        const btn = document.createElement('a');
        btn.href = bannerButton.url;
        btn.target = "_blank";
        btn.rel = "noopener noreferrer";
        btn.className = "banner-badge-btn";
        btn.innerHTML = `
            ${bannerButton.badge ? `<span class="badge-tag">${bannerButton.badge}</span>` : ''}
            <span>${bannerButton.text}</span>
            <i class="fa-solid fa-arrow-right" style="font-size: 0.7rem;"></i>
        `;
        bannerWrapper.appendChild(btn);
    }

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
            return `
                <div class="dropdown">
                    <button class="action-btn dropdown-btn">
                        <span>${item.title}</span> <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="dropdown-content">
                        ${item.subLinks.map(sub => {
                            if (sub.type === 'modal') {
                                return `<a href="#" class="modal-trigger" data-modal="${sub.modalId}">${sub.title}</a>`;
                            }
                            return `<a href="${sub.url}">${sub.title}</a>`;
                        }).join('')}
                    </div>
                </div>
            `;
        } else if (item.type === 'modal') {
            return `
                <button class="action-btn modal-trigger" data-modal="${item.modalId}">
                    <span>${item.title}</span>
                </button>
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

    // Render Modal
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) {
        let modalsHTML = '';

        if (musicLinks) {
            modalsHTML += `
                <div class="modal-overlay" id="music-modal">
                    <div class="modal-content">
                        <button class="modal-close" aria-label="Close modal"><i class="fa-solid fa-xmark"></i></button>
                        <h3 style="font-family: var(--font-display); font-size: 1.3rem;">${musicLinks.title}</h3>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.25rem; margin-bottom: 1rem;">Choose your platform</p>
                        <div class="modal-links">
                            ${musicLinks.links.map(link => `
                                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="modal-link-btn">
                                    <i class="${link.icon}"></i> ${link.name}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        modalsHTML += `
            <div class="modal-overlay" id="contact-modal">
                <div class="modal-content">
                    <button class="modal-close" aria-label="Close modal"><i class="fa-solid fa-xmark"></i></button>
                    <h3 style="font-family: var(--font-display); font-size: 1.3rem;">Get In Touch</h3>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem;">Leave a message and I'll get back to you.</p>
                    <form id="custom-contact-form" target="hidden_iframe" action="#" method="POST" style="text-align: left;">
                        <input type="text" name="entry.NAME_ID" placeholder="Your Name" required class="form-input">
                        <input type="email" name="entry.EMAIL_ID" placeholder="Your Email" required class="form-input">
                        <textarea name="entry.MESSAGE_ID" placeholder="Your Message" required class="form-input" rows="4"></textarea>
                        <button type="submit" class="form-submit-btn" onclick="window.submitted=true;">Send Message</button>
                    </form>
                    <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(typeof window.submitted !== 'undefined' && window.submitted) { alert('Message sent successfully!'); document.getElementById('contact-modal').classList.remove('active'); window.submitted=false; document.getElementById('custom-contact-form').reset(); }"></iframe>
                </div>
            </div>
        `;

        modalContainer.innerHTML = modalsHTML;

        // Modal Events
        const modalTriggers = document.querySelectorAll('.modal-trigger');
        const modals = document.querySelectorAll('.modal-overlay');
        const closeBtns = document.querySelectorAll('.modal-close');

        modalTriggers.forEach(btn => {
            btn.addEventListener('click', () => {
                const modalId = btn.getAttribute('data-modal');
                document.getElementById(modalId).classList.add('active');
            });
        });

        closeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                this.closest('.modal-overlay').classList.remove('active');
            });
        });

        // Close on click outside
        modals.forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                }
            });
        });
    }

});
