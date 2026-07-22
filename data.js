export const profileData = {
    name: "Mike De Zilva",
    bio: "Code & Sound Producer",
    avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" // Replace with actual avatar URL
};

export const socialLinks = [
    { name: "Spotify", icon: "fa-brands fa-spotify", url: "#" },
    { name: "Apple Music", icon: "fa-solid fa-music", url: "#" },
    { name: "YouTube", icon: "fa-brands fa-youtube", url: "#" },
    { name: "Instagram", icon: "fa-brands fa-instagram", url: "#" },
    { name: "X", icon: "fa-brands fa-x-twitter", url: "#" },
    { name: "LinkedIn", icon: "fa-brands fa-linkedin", url: "#" }
];

export const featuredVideo = {
    // Set to a valid YouTube embed URL, or leave empty "" to hide the video section.
    url: "https://www.youtube.com/embed/jfKfPfyJRdk" // Placeholder Lo-Fi radio
};

export const actionLinks = [
    { 
        type: "link", 
        title: "Latest Release: Shane Vincent EP", 
        url: "#" 
    },
    {
        type: "dropdown",
        title: "Enterprise Sound & Code Services",
        subLinks: [
            { title: "Custom Web Application Development", url: "#" },
            { title: "Music Production & Licensing", url: "#" },
            { title: "A.I. Strategy Consulting", url: "#" },
            { title: "Contact / Book a Call", url: "#" }
        ]
    },
    { 
        type: "link", 
        title: "Read: The Content Engine Framework", 
        url: "#" 
    }
];

export const gridLinks = [
    {
        title: "Code Architecture",
        badge: "Article",
        url: "#",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Studio Setup 2026",
        badge: "Video",
        url: "#",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "New Track Preview",
        badge: "Music",
        url: "#",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "A.I. Tools for Producers",
        badge: "Guide",
        url: "#",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
    }
];
