const API_URL = "http://127.0.0.1:8000/api/projects/";

async function loadProjects() {
    try {
        const response = await fetch(API_URL);
        const projects = await response.json();

        const projectList = document.getElementById("project-list");
        projectList.innerHTML = ""; // clear any existing content

        projects.forEach(project => {
            const card = document.createElement("div");
            card.className = "project-card";

            card.innerHTML = `
                ${project.image ? `<img src="http://127.0.0.1:8000/media/${project.image}" alt="${project.title}">` : ""}
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech">${project.tech_stack}</div>
                ${project.github_link ? `<a href="${project.github_link}" target="_blank">GitHub</a>` : ""}
                ${project.live_link ? `<a href="${project.live_link}" target="_blank">Live Demo</a>` : ""}
            `;

            projectList.appendChild(card);
        });
    } catch (error) {
        console.error("Failed to load projects:", error);
        document.getElementById("project-list").innerHTML = "<p>Unable to load projects right now.</p>";
    }
}

loadProjects();