import React from 'react';
import documentation from '../assets/images/Documentation_Website.png';
import drum from '../assets/images/Drum_Machine.png';
import markdown from '../assets/images/Markdown_Previewer.png';
import restrarant from '../assets/images/Restrarant_Website.png';
import text from '../assets/images/Text_Anaalyser_Screenshot.png';
import travel from '../assets/images/TRAVEL_WEBSIDE.png';
import survey from '../assets/images/MA_Survey_Form.png';
import university from '../assets/images/University_Website_Design.png';
import csshouse from '../assets/images/MA_CSS_House.png';

const projects = [
    {
        title: "Text Analyser",
        link: "https://text-analyzer-tool-yy9v-6kl3pvv5f-montyaction.vercel.app/",
        image: text,
        alt: "Text Analyser project image"
    },
    {
        title: "Drum Machine",
        link: "https://monumental-ganache-1868e6.netlify.app/",
        image: drum,
        alt: "Drum Machine project image"
    },
    {
        title: "Markdown Previewer",
        link: "https://subtle-capybara-d019f7.netlify.app/",
        image: markdown,
        alt: "Markdown Previewer project image"
    },
    {
        title: "Documentation Page",
        link: "https://chimerical-gecko-40e4a1.netlify.app/",
        image: documentation,
        alt: "Product Landing Page project image"
    },
    {
        title: "Restrarant Website",
        link: "https://optimistic-chandrasekhar-f38485.netlify.app",
        image: restrarant,
        alt: "Product Landing Page project image"
    },
    {
        title: "Travel Website",
        link: "https://heuristic-wozniak-e0e959.netlify.app",
        image: travel,
        alt: "Product Landing Page project image"
    },
    {
        title: "Survey Form",
        link: "https://codepen.io/montyaction/pen/zYdqWMz",
        image: survey,
        alt: "Product Landing Page project image"
    },
    {
        title: "University Website",
        link: "https://agitated-yalow-de6db8.netlify.app",
        image: university,
        alt: "Product Landing Page project image"
    },
    {
        title: "CSS Animation Page",
        link: "https://codepen.io/montyaction/pen/abyppqe",
        image: csshouse,
        alt: "Product Landing Page project image"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-section-header">These are some of my projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        className="project project-tile"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="project-image"
                            width="353"
                            height="400"
                            src={project.image}
                            alt={project.alt}
                        />
                        <p className="project-title">
                            <span className="code">&lt;</span>
                            {project.title}
                            <span className="code">&#47;&gt;</span>
                        </p>
                    </a>
                ))}
            </div>
            <a href="https://codepen.io/montyaction" className="btn btn-show-all" target="_blank" rel="noreferrer">
                Show all<i className="fas fa-chevron-right"></i>
            </a>
        </section>
    )
}

export default Projects;