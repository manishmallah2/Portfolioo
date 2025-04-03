document.addEventListener('DOMContentLoaded', function() {
  // Profile image fallback
  const profileImg = document.querySelector('.profile-img');
  if (profileImg) {
    profileImg.onerror = function() {
      this.src = 'https://via.placeholder.com/200/000000/FFFFFF/?text=Manish'; // Placeholder with dark bg, white text
      this.alt = 'Manish Mallah';
    };
    // If the src is initially empty or invalid, trigger onerror
    if (!profileImg.getAttribute('src') || profileImg.getAttribute('src') === '') {
        profileImg.onerror();
    }
  }

  // Dynamic title effect
  const dynamicTitleElement = document.getElementById('dynamic-title'); // The parent <p>
  const dynamicRoleSpan = document.getElementById('dynamic-role');      // The <span> for the role
  const titles = ["Data Analytics", "ML Engineering", "Data Engineering", "Web Development"];
  let currentIndex = 0;

  if (dynamicTitleElement && dynamicRoleSpan) { // Check if both elements exist
    // Initial state
    dynamicRoleSpan.textContent = titles[currentIndex];

    setInterval(() => {
      currentIndex = (currentIndex + 1) % titles.length;

      // Add class to trigger animation on the span
      dynamicRoleSpan.classList.add('title-change');

      // Wait for fade-out part of animation (adjust timing if needed)
      setTimeout(() => {
        // Update the text content of the span
        dynamicRoleSpan.textContent = titles[currentIndex];
        // Animation automatically reverses or finishes, remove class if needed for re-trigger
        // Keep class for continuous effect if animation is one-way fade-in
      }, 250); // Half of the animation duration (0.5s / 2)

        // Remove class slightly after animation ends to allow re-triggering
        setTimeout(() => {
           dynamicRoleSpan.classList.remove('title-change');
        }, 500); // Match animation duration in CSS

    }, 3000); // Change title every 3 seconds
  }


  // Projects data
  const projects = [
    {
      title: "Stock Market Forecasting",
      description: "Stock market forecasting using time series models involves predicting future stock prices based on historical data. Time series models analyze patterns and trends in data over time to make these predictions. Techniques such as ARIMA (AutoRegressive Integrated Moving Average).",
      tags: ["Machine Learning","Python", "TensorFlow", "LSTM", "Pandas","Y Finance"],
      image: "Stock.jpg", // Make sure this image exists in your project folder
      link: "https://github.com/manishmallah2/Stock-Market-Forecasting-"
    },
    {
      title: "Super Store Sales Dashboard",
      description: "The Super Store sales visualization project using Power BI aims to create interactive dashboards and reports for analyzing sales data, product performance, and customer trends, enabling data-driven decision-making for the store management.",
      tags: ["Power Bi", "Python", "Web Scraping","SQL","DBMS"],
      image: "Sales Dashbaord.png", // Make sure this image exists
      link: "https://app.powerbi.com/view?r=eyJrIjoiNjFmZDQwNzktOThkYi00NDE2LWEyMjEtNDQ3M2FlOTZkY2M5IiwidCI6IjEyNGRiMzVjLWVjYTctNDE5Zi1hOGM4LTQ1YTlkNmM5NDhjMCJ9"
    },
    {
        title: "Sentiment Analysis API",
        description: "Created a real-time sentiment classification system for product reviews using NLP techniques and deployed as a Flask API service. Analyzed text data to determine positive, negative, or neutral sentiment.",
        tags: ["NLP", "Flask", "NLTK", "BERT", "API"],
        image: "Gemini_Generated_Image_kd4l3fkd4l3fkd4l.jpg", // Replace with a relevant image name
        link: "#" // Update with actual link if available
    },
    {
        title: "Fraud Detection System",
        description: "Implemented an anomaly detection model for identifying potentially fraudulent financial transactions using isolation forests and XGBoost algorithms. Trained on historical transaction data.",
        tags: ["Scikit-learn", "XGBoost", "Pandas", "Anomaly Detection"],
        image: "Gemini_Generated_Image_j24m0wj24m0wj24m.jpg", // Replace with a relevant image name
        link: "#" // Update with actual link if available
    },
    {
      title: "Web Scraping: US Companies",
      description: "Developed a Python script using BeautifulSoup and Requests libraries to extract data about the largest US companies from an online webpage. The scraped data was then processed and saved into Excel and CSV formats.",
      tags: ["Beautiful Soup","Requests","Python", "Web Scraping", "Pandas"],
      image: "web scraping.png", // Make sure this image exists
      link: "https://github.com/manishmallah2/Web-Scraping-"
    },
    {
      title: "Image Classification (CNN)",
      description: "Built a Convolutional Neural Network (CNN) model for image classification using transfer learning with the ResNet50 architecture. Fine-tuned the model on a custom dataset, achieving high accuracy on test data.",
      tags: ["Python", "TensorFlow", "Keras", "CNN", "Computer Vision", "Transfer Learning"],
      image: "Gemini_Generated_Image_kd4l3fkd4l3fkd4l.jpg", // Replace with a relevant image name
      link: "#" // Update with actual link if available
    }
  ];

  // Skills data
  const skills = [
    { name: "Power BI", icon: "fas fa-chart-bar" },
    { name: "Tableau", icon: "fas fa-chart-pie" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "Python", icon: "fab fa-python" },
    { name: "HTML5", icon: "fab fa-html5" }, // Be specific
    { name: "CSS3", icon: "fab fa-css3-alt" }, // Be specific
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "React", icon: "fab fa-react" },
    { name: "MS Fabric", icon: "fas fa-cubes" }, // Clarify
    { name: "VS Code", icon: "fas fa-code" },
    { name: "Jupyter", icon: "fab fa-python" }, // Jupyter often associated with Python icon
    { name: "Data Pipeline", icon: "fas fa-stream" },
    { name: "Git", icon: "fab fa-git-alt" }, // Added Git
    { name: "Docker", icon: "fab fa-docker"} // Added Docker
  ];

  // --- Render Projects ---
  const projectsGrid = document.querySelector('.projects .project-grid');
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  const projectsToShowInitially = 3;
  let allProjectsRendered = false;

  function renderProjects(count) {
    if (!projectsGrid) return; // Exit if grid not found

    const projectsToRender = projects.slice(0, count);
    projectsGrid.innerHTML = projectsToRender.map(project => `
      <div class="project-card"
           data-title="${escapeHtml(project.title)}"
           data-description="${escapeHtml(project.description)}"
           data-tags="${escapeHtml(project.tags.join(','))}"
           data-image="${escapeHtml(project.image)}"
           data-link="${escapeHtml(project.link)}">
        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x225/0f172a/cbd5e1?text=No+Image'; this.alt='Image not found';">
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.description.substring(0, 120))}${project.description.length > 120 ? '...' : ''}</p>
        <div class="tags">
          ${project.tags.slice(0, 3).map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}
          ${project.tags.length > 3 ? `<span>+${project.tags.length - 3} more</span>` : ''}
        </div>
      </div>
    `).join('');
    // DO NOT re-attach listeners here if using event delegation below
  }

  // Initial render
  renderProjects(projectsToShowInitially);

  // View More button logic
  if (viewMoreBtn) {
    if (projects.length <= projectsToShowInitially) {
      viewMoreBtn.style.display = 'none'; // Hide if not enough projects
    } else {
      viewMoreBtn.style.display = 'block'; // Ensure it's visible initially if needed
      viewMoreBtn.addEventListener('click', function() {
        renderProjects(projects.length); // Render all projects
        viewMoreBtn.style.display = 'none'; // Hide button after clicking
        allProjectsRendered = true;
      });
    }
  }

  // --- Render Skills ---
  const skillsContainer = document.querySelector('.skills-container');
  if (skillsContainer) {
    skillsContainer.innerHTML = skills.map(skill => `
      <div class="skill-item">
        <i class="${escapeHtml(skill.icon)}" title="${escapeHtml(skill.name)}"></i>
        <h3>${escapeHtml(skill.name)}</h3>
      </div>
    `).join('');
  }

  // --- Modal Functionality ---
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalTags = document.getElementById('modalTags');
  const modalImage = document.getElementById('modalImage');
  const projectLink = document.getElementById('projectLink');
  const closeBtn = modal ? modal.querySelector('.close') : null; // Find close button inside modal

   // Use event delegation on the grid container for project cards
   if (projectsGrid) {
      projectsGrid.addEventListener('click', function(event) {
          const card = event.target.closest('.project-card'); // Find the clicked card
          if (card) {
              handleCardClick(card); // Pass the card element
          }
      });
  }


 function handleCardClick(cardElement) { // Accept card element as argument
    if (!modal || !modalTitle || !modalDescription || !modalTags || !modalImage || !projectLink) {
        console.error("Modal elements not found!");
        return;
    }
    const title = cardElement.getAttribute('data-title');
    const description = cardElement.getAttribute('data-description');
    const tags = cardElement.getAttribute('data-tags').split(',');
    const image = cardElement.getAttribute('data-image');
    const link = cardElement.getAttribute('data-link');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = image;
    modalImage.alt = title; // Set alt text
    modalImage.onerror = function() { // Add fallback for modal image too
        this.onerror=null;
        this.src='https://via.placeholder.com/800x400/0f172a/cbd5e1?text=Image+Not+Found';
        this.alt='Image loading failed';
    }
    projectLink.href = link;
    // Make "View Project" button visible only if link is valid and not '#'
    projectLink.style.display = (link && link !== '#' && link.trim() !== '') ? 'inline-block' : 'none';

    modalTags.innerHTML = ''; // Clear previous tags
    tags.forEach(tag => {
      const trimmedTag = tag.trim();
      if (trimmedTag) { // Ensure tag is not empty
        const tagElement = document.createElement('span');
        tagElement.textContent = trimmedTag;
        modalTags.appendChild(tagElement);
      }
    });

    modal.style.display = "block";
    document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
  }

 // Function to close modal
 function closeModal() {
     if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = ''; // Restore background scroll
     }
 }

  // Close button listener
  if(closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Click outside modal to close
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal && modal.style.display === "block") {
      closeModal();
    }
  });

  // --- Utility function to escape HTML ---
  function escapeHtml(unsafe) {
      if (unsafe === null || unsafe === undefined) {
          return '';
      }
      // Basic escaping, consider a library for more robust needs
      return unsafe
           .toString()
           .replace(/&/g, "&amp;")
           .replace(/</g, "&lt;")
           .replace(/>/g, "&gt;")
           .replace(/"/g, "&quot;")
           .replace(/'/g, "&#039;");
  }

});