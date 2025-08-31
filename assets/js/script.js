$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });


});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Shahnil Sharma";
            $("#favicon").attr("href", "assets/images/spiddy.ico");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/spiddy.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: [
  "frontend development",
  "web development",
  "web designing",
  "Community Building",
  "Solidity Smart Contracts",
  "React.js",
  "Next.js",
  "Angular",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "PostgreSQL",
  "Redux Toolkit",
  "REST APIs",
  "Chatbot Integration",
  "AI Tools",
  "Web3"
],

    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
    setInterval(loader, 500);
}
window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/68814b99debf57191758474b/1j0sguk7e';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

// Spiderman theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-mask"></i>';
    }
    
    // Theme toggle button functionality
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            addComicEffects();
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-mask"></i>';
            removeComicEffects();
        }
    });
    
    // Add comic book effects
    function addComicEffects() {
        // Add web lines to the background
        addWebLines();
        
        // Add comic panel borders to sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('comic-panel');
        });
        
        // Add spidey sense effect to important elements
        const importantElements = document.querySelectorAll('.btn, .theme-toggle');
        importantElements.forEach(el => {
            el.classList.add('spidey-sense');
        });
    }
    
    function removeComicEffects() {
        // Remove web lines
        const webLines = document.querySelectorAll('.web-line');
        webLines.forEach(line => line.remove());
        
        // Remove comic panel borders
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('comic-panel');
        });
        
        // Remove spidey sense effect
        const importantElements = document.querySelectorAll('.btn, .theme-toggle');
        importantElements.forEach(el => {
            el.classList.remove('spidey-sense');
        });
    }
    
    function addWebLines() {
        const numberOfLines = 20;
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '1';
        container.id = 'web-container';
        
        for (let i = 0; i < numberOfLines; i++) {
            const line = document.createElement('div');
            line.classList.add('web-line');
            
            // Random position and rotation
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const angle = Math.random() * 360;
            const length = 50 + Math.random() * 100;
            
            line.style.width = length + 'px';
            line.style.height = '1px';
            line.style.position = 'absolute';
            line.style.left = startX + 'vw';
            line.style.top = startY + 'vh';
            line.style.transform = `rotate(${angle}deg)`;
            line.style.opacity = '0.1';
            
            container.appendChild(line);
        }
        
        document.body.appendChild(container);
    }
    
    // Add particles color change in dark mode
    const originalParticlesRefresh = particlesJS;
    
    particlesJS = function(e, a) {
        if (body.classList.contains('dark-mode') && a && a.particles) {
            // Change particles to spiderman theme
            a.particles.color.value = '#e23636';
            a.particles.line_linked.color = '#2b3990';
        }
        originalParticlesRefresh(e, a);
    };
});

// Image toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const imageToggle = document.getElementById('image-toggle');
    const imageToggleContainer = document.getElementById('image-toggle-container');
    const profileImage = document.querySelector('.home .image img');
    const imageContainer = document.querySelector('.home .image');
    const body = document.body;
    
    // Create container for additional effects
    const container = document.createElement('div');
    container.className = 'image-container';
    profileImage.parentNode.insertBefore(container, profileImage);
    container.appendChild(profileImage);
    
    // Store original image source
    const originalSrc = profileImage.src;
    const spidermanSrc = originalSrc.replace('.jpeg', '-spiderman.jpeg');
    
    // Create comic bubble element
    const comicBubble = document.createElement('div');
    comicBubble.className = 'comic-bubble';
    comicBubble.textContent = 'Thwip!';
    container.appendChild(comicBubble);
    
    // Create web shooter effect
    const webShooter = document.createElement('div');
    webShooter.className = 'web-shooter';
    container.appendChild(webShooter);
    
    // Check for saved preferences
    const savedTheme = localStorage.getItem('theme');
    const savedImageMode = localStorage.getItem('imageMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial state based on saved preferences or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        // Dark mode is active
        imageToggleContainer.style.display = 'flex';
        
        if (savedImageMode === 'spiderman') {
            imageToggle.checked = true;
            activateSpidermanImage();
        } else {
            // Default to normal image in dark mode
            setDarkModeImage(false);
        }
    }
    
    // Toggle functionality
    imageToggle.addEventListener('change', function() {
        if (this.checked) {
            activateSpidermanImage();
            localStorage.setItem('imageMode', 'spiderman');
        } else {
            setDarkModeImage(false);
            localStorage.setItem('imageMode', 'normal');
        }
    });
    
    // Function to handle dark mode changes
    function handleDarkModeChange(isDarkMode) {
        if (isDarkMode) {
            // Show the toggle button
            imageToggleContainer.style.display = 'flex';
            
            // Check if we should use Spiderman image
            const imageMode = localStorage.getItem('imageMode');
            if (imageMode === 'spiderman') {
                imageToggle.checked = true;
                activateSpidermanImage();
            } else {
                setDarkModeImage(false);
            }
        } else {
            // Hide the toggle button and revert to normal image
            imageToggleContainer.style.display = 'none';
            imageToggle.checked = false;
            setLightModeImage();
        }
    }
    
    // Observe theme changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                const isDarkMode = body.classList.contains('dark-mode');
                handleDarkModeChange(isDarkMode);
            }
        });
    });
    
    // Start observing the body for class changes
    observer.observe(body, { attributes: true });
    
    function activateSpidermanImage() {
        // Add Spiderman class to image
        profileImage.classList.add('spiderman-image');
        container.classList.add('spiderman-image');
        
        // Add animation
        profileImage.classList.add('animate-spidey');
        
        // Change to Spiderman image
        const preloadImage = new Image();
        preloadImage.src = spidermanSrc;
        preloadImage.onload = function() {
            profileImage.src = spidermanSrc;
        };
        
        // Add special effect on hover
        container.addEventListener('mouseenter', addHoverEffect);
        container.addEventListener('mouseleave', removeHoverEffect);
    }
    
    function setDarkModeImage(isSpiderman) {
        if (isSpiderman) {
            activateSpidermanImage();
        } else {
            // Use normal image but with dark mode styling
            profileImage.classList.remove('spiderman-image', 'animate-spidey');
            container.classList.remove('spiderman-image');
            
            // Revert to original image but keep dark mode border
            profileImage.src = originalSrc;
            profileImage.classList.add('default-image');
            
            // Remove hover effects
            container.removeEventListener('mouseenter', addHoverEffect);
            container.removeEventListener('mouseleave', removeHoverEffect);
            removeHoverEffect();
        }
    }
    
    function setLightModeImage() {
        // Revert to completely normal image
        profileImage.classList.remove('spiderman-image', 'animate-spidey', 'default-image');
        container.classList.remove('spiderman-image');
        
        // Revert to original image
        profileImage.src = originalSrc;
        
        // Remove hover effects
        container.removeEventListener('mouseenter', addHoverEffect);
        container.removeEventListener('mouseleave', removeHoverEffect);
        removeHoverEffect();
    }
    
    function addHoverEffect() {
        if (imageToggle.checked && body.classList.contains('dark-mode')) {
            // Add extra effects on hover
            profileImage.style.transform = 'scale(1.05)';
            profileImage.style.transition = 'transform 0.3s ease';
            
            // Add web lines effect
            addWebLinesEffect();
        }
    }
    
    function removeHoverEffect() {
        profileImage.style.transform = 'scale(1)';
        
        // Remove web lines
        const webLines = document.querySelectorAll('.web-line-effect');
        webLines.forEach(line => line.remove());
    }
    
    function addWebLinesEffect() {
        // Remove any existing web lines
        removeHoverEffect();
        
        // Create web lines radiating from the image
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const length = 50 + Math.random() * 50;
            
            const webLine = document.createElement('div');
            webLine.className = 'web-line-effect';
            webLine.style.position = 'absolute';
            webLine.style.width = length + 'px';
            webLine.style.height = '2px';
            webLine.style.background = 'linear-gradient(to right, rgba(255,255,255,0.8), transparent)';
            webLine.style.transformOrigin = '0 0';
            webLine.style.transform = `rotate(${angle}rad)`;
            webLine.style.top = '50%';
            webLine.style.left = '50%';
            webLine.style.zIndex = '1';
            webLine.style.opacity = '0.7';
            
            container.appendChild(webLine);
        }
    }
    
    // Initialize based on current theme
    handleDarkModeChange(body.classList.contains('dark-mode'));
});