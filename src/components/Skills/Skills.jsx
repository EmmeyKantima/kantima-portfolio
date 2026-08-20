import { useEffect, useState } from "react";
import { getTechnologies } from "../../services/api";
import "./Skills.css";

function Skills() {
    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {
        async function loadTechnologies() {
            try {
                const data = await getTechnologies();
                setTechnologies(data);
            } catch (error) {
                console.error("Failed to load technologies:", error);
            }
        }

        loadTechnologies();
    }, []);

    const categories = [
        "Frontend",
        "Backend",
        "Framework",
        "Language",
        "Tool",
        "Other",
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-heading">
                <p className="section-label">SKILLS</p>

                <h2>
                    Tools I use to
                    <span> build things.</span>
                </h2>
            </div>

            <div className="skills-grid">
                {categories.map((category) => {
                    const categorySkills = technologies.filter(
                        (technology) => technology.category === category
                    );

                    if (categorySkills.length === 0) {
                        return null;
                    }

                    return (
                        <div className="skill-group" key={category}>
                            <div className="skill-group-header">
                                <span>{category}</span>
                                <span>
                                    {String(categorySkills.length).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="skill-list">
                                {categorySkills.map((technology) => (
                                    <div
                                        className="skill-item"
                                        key={technology._id}
                                    >
                                        <span>{technology.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;