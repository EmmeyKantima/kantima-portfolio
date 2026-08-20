import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { getProjects } from "../../services/api";
import "./Projects.css";

import weatherImage from "../../assets/weather.png";
import petSwipeImage from "../../assets/petswipe.png";
import fallingStarImage from "../../assets/falling-star.png";
import baziImage from "../../assets/bazi.png";
import onceUponImage from "../../assets/once-upon.png";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error("Failed to load projects:", error);
            }
        }

        loadProjects();
    }, []);

    const projectImages = {
        "Weather...whatever?": weatherImage,
        "PetSwipe": petSwipeImage,
        "Falling Star": fallingStarImage,
        "Bazi Match": baziImage,
        "Once upon a time": onceUponImage,
    };

    return (
        <section id="projects" className="projects">

            <div className="projects-heading">
                <p className="section-label">PROJECTS</p>

                <h2>
                    Things I have
                    <span> built.</span>
                </h2>
            </div>

            <div className="projects-grid">

                {projects.map((project) => (

                    <article className="project-card" key={project._id}>

                        <div className="project-image">
                            <img src={projectImages[project.title]} alt={`${project.title} project preview`}/>
                        </div>

                        <div className="project-content">

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="project-technologies">
                                {project.technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">

                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    View Demo
                                    <ArrowUpRight size={16} />
                                </a>

                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                    <ArrowUpRight size={16} />
                                </a>

                            </div>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}

export default Projects;